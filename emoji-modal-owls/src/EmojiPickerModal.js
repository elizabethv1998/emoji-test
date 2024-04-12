import 'node_modules/emoji-mart';
import React from 'react';
import data from '@emoji-mart/data'
import Picker from '@emoji-mart/react'

function App() {
  return (
    <Picker data={data} onEmojiSelect={console.log} />
  )
}

const EmojiPickerModal = ({ onSelectEmoji, onClose }) => {
  const handleEmojiSelect = emoji => {
    onSelectEmoji(emoji); 
    onClose(); 
  };

  return (
    <div className="emoji-picker-modal">
      <div className="emoji-picker-container">
        <span className="emoji-picker-close" onClick={onClose}>&times;</span>
        <h2>Select an Emoji</h2>
        <Picker
          set="apple" //  emoji set (e.g., 'apple', 'google', 'twitter')
          onSelect={handleEmojiSelect} 
          showPreview={false} 
        />
      </div>
    </div>
  );
};

export default EmojiPickerModal;
