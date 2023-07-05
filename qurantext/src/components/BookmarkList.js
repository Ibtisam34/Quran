import React from 'react';
const BookmarkList = ({ bookmarks }) => {
  if (bookmarks.length === 0) {
    return <div>No bookmarks</div>;
  }
  return (
    <div>
      <h3>Bookmarks</h3>
      <ul>
        {bookmarks.map((bookmark) => (
          <li key={bookmark.id}>
            <p>{bookmark.text}</p>
            <p>{bookmark.translation}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default BookmarkList;