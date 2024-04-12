import React, { useState } from 'react';
import EmojiPickerModal from 'emoji-mart/react';
import './App.css'; 

function App() {
  const [showModal, setShowModal] = useState(false);
  const [selectedEmoji, setSelectedEmoji] = useState(null);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleEmojiSelect = emoji => {
    setSelectedEmoji(emoji);
  };

  return (
    <div className="App">
      <h1>Emoji Modal Owls</h1>
      <button onClick={handleOpenModal}>Open Emoji Modal</button>
      {showModal && (
        <EmojiPickerModal
          onSelectEmoji={handleEmojiSelect}
          onClose={handleCloseModal}
        />
      )}
      {selectedEmoji && (
        <div>
          <p>You selected: {selectedEmoji.native}</p>
        </div>
      )}
    </div>
  );
}

export default App;
