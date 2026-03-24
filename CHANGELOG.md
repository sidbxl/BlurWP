# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.2.5] - 2026-03-12

### Changed
- Release version 1.2.5

## [1.2.3] - 2026-03-12

### Changed
- Release version 1.2.3

## [1.2.2] - 2026-03-12

### Changed
- Release version 1.2.2

## [1.2.1] - 2026-03-12

### Changed
- Release version 1.2.1

## [1.2.0] - 2026-03-12

### Changed
- Release version 1.2.0

## [1.1.0] - 2026-03-11

### Added
- **Resizable & Movable Face Boxes** - Full drag-and-drop interface
  - Drag face boxes to reposition
  - 8 resize handles (corners + edges) for precise adjustment
  - Visual feedback with cursor changes and selection highlighting
  - Reset button to restore original detected positions
  - Original coordinates stored for accurate reset functionality
- **Logarithmic Blur Scaling** - Fixed halo effect at high privacy levels
  - Prevents over-blurring that made faces visible again
  - Maps 0-100% intensity to 0-23px blur radius
  - More consistent obscuring across all privacy levels
- **Open Source Documentation**
  - Comprehensive README with badges and examples
  - GPL v2 License
  - CONTRIBUTING.md with development guidelines
  - This CHANGELOG.md

### Changed
- Improved face box selection with thicker borders
- Enhanced workspace persistence to save face modifications
- Better visual feedback during interactions

### Fixed
- Blur effect now properly obscures faces at 80-100% intensity
- Face boxes maintain proper proportions when resized

## [1.0.1] - 2026-03-11

### Added
- **Model Loading Progress** - Visual feedback during model initialization
- **Image Cache Busting** - Ensures updated images display correctly in Media Library
- **Thumbnail Anonymization** - All image sizes (thumbnail, medium, large) properly anonymized
- **Simplified Thumbnail Generation** - Uses WordPress native functions for reliability

### Fixed
- **Windows Path Normalization** - Fixed backup restore on Windows servers
- Path comparison now uses forward slashes consistently
- Backup cleanup after successful restore

### Changed
- Thumbnail anonymization simplified to use `wp_generate_attachment_metadata()`
- Removed complex GD library manipulation

## [1.0.0] - 2026-03-10

### Added
- **Complete Rewrite** - Ground-up rebuild with modern tooling
  - TypeScript for type safety
  - Vite for fast builds
  - Single optimized bundle (~670KB)
- **Face Detection Engine**
  - Local face-api.js integration (no external APIs)
  - Multiple detection models:
    - Tiny Face Detector (189KB) - Fast
    - SSD MobileNet v1 (5.4MB) - Accurate
    - MTCNN (1.9MB) - Alternative
  - Adjustable sensitivity threshold
  - Auto-retry with decreasing thresholds
- **Canvas Effects Engine**
  - Gaussian blur effect
  - Pixelate (mosaic) effect
  - Adjustable intensity (0-100%)
  - Expand function for coverage
- **Interactive Editor**
  - Two-column modal interface
  - Real-time preview
  - Manual face drawing
  - Face toggling (enable/disable individual faces)
  - Model selector
  - Sensitivity control
- **WordPress Integration**
  - REST API endpoints
  - Media Library integration
  - Metadata storage (_blurwp_anonymized, _blurwp_faces, _blurwp_settings)
  - Automatic thumbnail regeneration
- **Backup System** (Opt-in)
  - Disabled by default
  - Randomized filenames for security
  - Centralized storage with .htaccess protection
  - One-click restore from Media Library
  - Storage usage stats and purge functionality
- **Workspace Persistence**
  - Auto-save to sessionStorage
  - Restore previous sessions
  - LRU cache (max 10 workspaces)
- **Security Features**
  - Nonce verification on all requests
  - Capability checks (upload_files)
  - Path validation
  - Secure backup storage

### Changed
- Migrated from vanilla JavaScript to TypeScript
- Replaced multiple JS files with single optimized bundle
- Models now bundled locally instead of CDN
- Improved error handling and user feedback

### Removed
- Old JavaScript files (face-detection.js, canvas-editor.js, etc.)
- Unused face-api.js models (saved 7.5MB):
  - face_recognition_model (6.2MB)
  - age_gender_model (420KB)
  - face_expression_model (322KB)
  - face_landmark_68 models (425KB total)

## [0.9.0] - 2025-XX-XX (Beta)

### Added
- Initial beta release
- Basic face detection
- Simple blur effect
- WordPress Media Library integration
- Basic backup functionality

## Migration Notes

### From 1.0.0 to 1.1.0
- No breaking changes
- New features are additive
- Face boxes now support move/resize
- Blur effect improved at high intensities

### From 0.x to 1.0.0
- Complete rewrite - treat as new installation
- Backup your WordPress database before upgrading
- Old backups remain accessible
- Settings may need reconfiguration

## Deprecation Notices

None currently.

## Security Updates

### [1.0.1]
- Improved path validation for backup operations
- Enhanced filename randomization

### [1.0.0]
- Initial security audit passed
- All REST endpoints properly secured with nonces
- Capability checks implemented

## Known Issues

### Current
- MTCNN model detects 0 faces (investigating)
- Large images (>20MB) may cause memory issues on some servers
- Very small faces (<30px) may not be detected

### Resolved
- ✅ Windows path normalization (1.0.1)
- ✅ Thumbnail anonymization (1.0.1)
- ✅ Blur halo effect (1.1.0)

---

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for information on how to contribute to this project.

## License

This project is licensed under the GPL v2 or later - see the [LICENSE](LICENSE) file for details.
