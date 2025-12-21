// src/components/VideoGallery.js
import React, { useState } from 'react';
import './VideoGallery.css';
import CloudinaryIframePlayer from './CloudinaryIframePlayer';

const VideoGallery = ({ 
  videos = [], 
  title = "Product Videos", 
  description = "",
  cloudName // Add cloudName prop for Cloudinary
}) => {
  const [playingVideoIndex, setPlayingVideoIndex] = useState(null);

  const handleVideoClick = (index) => {
    setPlayingVideoIndex(index);
  };

  const handleCloseVideo = () => {
    setPlayingVideoIndex(null);
  };

  if (!videos || videos.length === 0) {
    return null;
  }

  return (
    <>
      <section className="video-gallery-section section-border">
        <div className="container">
          <h2 className="video-gallery-title">{title}</h2>
          {description && <p className="video-gallery-description">{description}</p>}
          
          <div className="video-grid">
            {videos.map((video, index) => {
              // Handle both string URLs and object formats
              const videoData = typeof video === 'string' 
                ? { publicId: video, title: `Video ${index + 1}` }
                : video;
              
              return (
                <div key={index} className="video-card">
                  <div 
                    className="video-thumbnail-container"
                    onClick={() => handleVideoClick(index)}
                  >
                    <div className="video-placeholder">
                      <div className="play-icon">▶</div>
                      <div className="video-label">Click to play video</div>
                    </div>
                  </div>
                  
                  <div className="video-info">
                    <h3 className="video-title">{videoData.title || `Video ${index + 1}`}</h3>
                    <p className="video-description">
                      {videoData.description || 'Watch our product demonstration'}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Video Modal/Lightbox for Cloudinary Iframe Player */}
      {playingVideoIndex !== null && cloudName && (
        <div className="video-modal-overlay" onClick={handleCloseVideo}>
          <div 
            className="video-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button className="video-modal-close-btn" onClick={handleCloseVideo}>
              ×
            </button>
            
            <div className="video-modal-player-container">
              <CloudinaryIframePlayer
                cloudName={cloudName}
                publicId={typeof videos[playingVideoIndex] === 'object' 
                  ? videos[playingVideoIndex].publicId 
                  : videos[playingVideoIndex]}
                title={typeof videos[playingVideoIndex] === 'object' 
                  ? videos[playingVideoIndex].title || `Video ${playingVideoIndex + 1}`
                  : `Video ${playingVideoIndex + 1}`}
                autoplay={true}
              />
            </div>
            
            <div className="video-modal-info">
              <h3 className="video-modal-title">
                {typeof videos[playingVideoIndex] === 'object' 
                  ? videos[playingVideoIndex].title || `Video ${playingVideoIndex + 1}`
                  : `Video ${playingVideoIndex + 1}`}
              </h3>
              <p className="video-modal-description">
                {typeof videos[playingVideoIndex] === 'object' 
                  ? videos[playingVideoIndex].description || 'Full screen video playback'
                  : 'Full screen video playback'}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default VideoGallery;