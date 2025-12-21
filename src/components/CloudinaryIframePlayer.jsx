// src/components/CloudinaryIframePlayer.js
import React from 'react';
import './CloudinaryIframePlayer.css';

const CloudinaryIframePlayer = ({ 
  cloudName, 
  publicId, 
  title = "Video Player",
  width = "100%",
  aspectRatio = "16/9", // Default 16:9 aspect ratio
  autoplay = false,
  controls = true
}) => {
  const embedUrl = `https://player.cloudinary.com/embed/?cloud_name=${cloudName}&public_id=${publicId}&profile=cld-default`;
  
  return (
    <div className="cloudinary-iframe-container">
      <iframe
        src={embedUrl}
        title={title}
        width={width}
        style={{ 
          height: 'auto', 
          width: '100%', 
          aspectRatio: aspectRatio,
          border: 'none',
          borderRadius: '8px'
        }}
        allow={`autoplay; fullscreen; encrypted-media; picture-in-picture`}
        allowFullScreen
        frameBorder="0"
      />
    </div>
  );
};

export default CloudinaryIframePlayer;