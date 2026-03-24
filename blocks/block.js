(function(wp) {
    'use strict';

    var registerBlockType = wp.blocks.registerBlockType;
    var __ = wp.i18n.__;
    var el = wp.element.createElement;
    var useState = wp.element.useState;
    var useEffect = wp.element.useEffect;
    
    // Modern Block Editor components
    var blockEditor = wp.blockEditor || wp.editor;
    var InspectorControls = blockEditor.InspectorControls;
    var MediaUpload = blockEditor.MediaUpload;
    var MediaUploadCheck = blockEditor.MediaUploadCheck;
    var BlockControls = blockEditor.BlockControls;
    
    var components = wp.components;
    var PanelBody = components.PanelBody;
    var Button = components.Button;
    var ToolbarGroup = components.ToolbarGroup;
    var ToolbarButton = components.ToolbarButton;
    var Placeholder = components.Placeholder;
    var ExternalLink = components.ExternalLink;

    registerBlockType('blurwp/image', {
        title: __('BlurWP Face Anonymization', 'blurwp'),
        description: __('Anonymize faces in images with blur or pixelate effects.', 'blurwp'),
        icon: 'hidden',
        category: 'media',
        keywords: [
            __('blur', 'blurwp'),
            __('pixelate', 'blurwp'),
            __('face', 'blurwp'),
            __('privacy', 'blurwp'),
        ],

        attributes: {
            id: {
                type: 'number',
                default: 0,
            },
            url: {
                type: 'string',
                default: '',
            },
            alt: {
                type: 'string',
                default: '',
            },
            caption: {
                type: 'string',
                default: '',
            },
            anonymized: {
                type: 'boolean',
                default: false,
            },
            hasBackup: {
                type: 'boolean',
                default: false,
            }
        },

        edit: function(props) {
            var attributes = props.attributes;
            var setAttributes = props.setAttributes;
            var className = props.className;
            var isSelected = props.isSelected;

            // State to track if we're checking for anonymization status
            var [isChecking, setIsChecking] = useState(false);

            // Effect to check anonymization status when ID changes
            useEffect(function() {
                if (attributes.id && !isChecking) {
                    setIsChecking(true);
                    wp.apiFetch({
                        path: 'blurwp/v1/image/' + attributes.id,
                    }).then(function(response) {
                        setAttributes({
                            anonymized: !!response.anonymized,
                            hasBackup: !!response.has_backup,
                            url: response.url || attributes.url // Update URL in case it changed
                        });
                        setIsChecking(false);
                    }).catch(function() {
                        setIsChecking(false);
                    });
                }
            }, [attributes.id]);

            function onSelectImage(media) {
                if (!media || !media.id) {
                    return;
                }

                setAttributes({
                    id: media.id,
                    url: media.url,
                    alt: media.alt || '',
                });
            }

            function openEditor() {
                if (!attributes.id) {
                    return;
                }

                if (window.blurwpOpenEditor) {
                    window.blurwpOpenEditor(attributes.id, attributes.url);
                    
                    // Listen for save success to update block attributes
                    var onSave = function(e) {
                        if (e.detail.attachmentId === attributes.id) {
                            setAttributes({ anonymized: true, hasBackup: true });
                            document.removeEventListener('blurwp:save:success', onSave);
                        }
                    };
                    document.addEventListener('blurwp:save:success', onSave);
                } else {
                    alert(__('BlurWP editor is not available. Please refresh the page.', 'blurwp'));
                }
            }

            function restoreOriginal() {
                if (!attributes.id) return;
                
                if (!confirm(__('Are you sure you want to restore the original image?', 'blurwp'))) {
                    return;
                }

                wp.apiFetch({
                    path: 'blurwp/v1/restore/' + attributes.id,
                    method: 'POST',
                }).then(function() {
                    setAttributes({ anonymized: false, hasBackup: false });
                    // Trigger a refresh of the image URL
                    wp.apiFetch({
                        path: 'blurwp/v1/image/' + attributes.id,
                    }).then(function(response) {
                        setAttributes({ url: response.url });
                    });
                }).catch(function(error) {
                    alert(error.message || __('Failed to restore image.', 'blurwp'));
                });
            }

            function removeImage() {
                setAttributes({
                    id: 0,
                    url: '',
                    alt: '',
                    caption: '',
                    anonymized: false,
                    hasBackup: false
                });
            }

            // Render placeholder if no image
            if (!attributes.url) {
                return el(
                    Placeholder,
                    {
                        icon: 'hidden',
                        label: __('BlurWP Face Anonymization', 'blurwp'),
                        instructions: __('Select an image to anonymize faces.', 'blurwp'),
                        className: className
                    },
                    el(
                        MediaUploadCheck,
                        null,
                        el(
                            MediaUpload,
                            {
                                onSelect: onSelectImage,
                                type: 'image',
                                allowedTypes: ['image'],
                                render: function(_ref) {
                                    var open = _ref.open;
                                    return el(
                                        Button,
                                        {
                                            isPrimary: true,
                                            onClick: open,
                                        },
                                        __('Select Image', 'blurwp')
                                    );
                                },
                            }
                        )
                    )
                );
            }

            return [
                // Block Controls (Toolbar)
                el(
                    BlockControls,
                    { key: 'controls' },
                    el(
                        ToolbarGroup,
                        null,
                        el(
                            ToolbarButton,
                            {
                                label: attributes.anonymized ? __('Edit Anonymization', 'blurwp') : __('Anonymize Faces', 'blurwp'),
                                icon: 'hidden',
                                onClick: openEditor,
                            }
                        ),
                        attributes.anonymized && attributes.hasBackup && el(
                            ToolbarButton,
                            {
                                label: __('Restore Original', 'blurwp'),
                                icon: 'undo',
                                onClick: restoreOriginal,
                            }
                        )
                    )
                ),
                
                // Inspector Controls (Sidebar)
                el(
                    InspectorControls,
                    { key: 'inspector' },
                    el(
                        PanelBody,
                        { title: __('BlurWP Status', 'blurwp') },
                        el(
                            'div',
                            { style: { marginBottom: '15px' } },
                            attributes.anonymized ? 
                                el('span', { style: { color: '#46b450', fontWeight: 'bold' } }, '✓ ' + __('Faces Anonymized', 'blurwp')) : 
                                el('span', { style: { color: '#dc3232', fontWeight: 'bold' } }, '⚠ ' + __('Not Anonymized', 'blurwp'))
                        ),
                        el(
                            Button,
                            {
                                isPrimary: true,
                                onClick: openEditor,
                                isBusy: isChecking,
                                style: { width: '100%', justifyContent: 'center', marginBottom: '10px' }
                            },
                            attributes.anonymized ? __('Edit Anonymization', 'blurwp') : __('Anonymize Faces', 'blurwp')
                        ),
                        attributes.anonymized && attributes.hasBackup && el(
                            Button,
                            {
                                isDestructive: true,
                                variant: 'secondary',
                                onClick: restoreOriginal,
                                style: { width: '100%', justifyContent: 'center' }
                            },
                            __('Restore Original', 'blurwp')
                        ),
                        el(
                            'p',
                            { className: 'description', style: { marginTop: '15px' } },
                            __('Anonymization processing happens locally in your browser. Original files are kept for 5 minutes by default.', 'blurwp')
                        )
                    )
                ),

                // Main Content
                el(
                    'div',
                    { 
                        key: 'content', 
                        className: className + (attributes.anonymized ? ' is-anonymized' : ''),
                        style: { position: 'relative' }
                    },
                    el('img', {
                        src: attributes.url + (attributes.anonymized ? '?blurwp_v=' + Date.now() : ''),
                        alt: attributes.alt,
                        style: { maxWidth: '100%', height: 'auto', display: 'block' },
                    }),
                    !attributes.anonymized && el(
                        'div',
                        { 
                            className: 'blurwp-block-overlay',
                            style: {
                                position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                background: 'rgba(0,0,0,0.1)'
                            }
                        },
                        el(
                            Button,
                            {
                                isPrimary: true,
                                onClick: openEditor,
                                icon: 'hidden',
                                style: { boxShadow: '0 2px 10px rgba(0,0,0,0.3)' }
                            },
                            __('Anonymize Faces', 'blurwp')
                        )
                    ),
                    attributes.anonymized && el(
                        'div',
                        {
                            style: {
                                position: 'absolute', top: '10px', right: '10px',
                                background: '#46b450', color: 'white', padding: '4px 8px',
                                borderRadius: '4px', fontSize: '11px', fontWeight: 'bold',
                                boxShadow: '0 2px 4px rgba(0,0,0,0.2)'
                            }
                        },
                        '✓ ' + __('ANONYMIZED', 'blurwp')
                    )
                )
            ];
        },

        save: function(props) {
            var attributes = props.attributes;

            if (!attributes.id) {
                return null;
            }

            return el(
                'figure',
                { className: 'wp-block-blurwp-image' + (attributes.anonymized ? ' is-anonymized' : '') },
                el('img', {
                    src: attributes.url,
                    alt: attributes.alt,
                    'data-attachment-id': attributes.id
                }),
                attributes.caption && el('figcaption', null, attributes.caption)
            );
        },
    });
})(window.wp);
