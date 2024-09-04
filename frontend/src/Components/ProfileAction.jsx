import { useState } from 'react';

export const useProfileView = () => {
    const [view, setView] = useState('posts');

    const Post = () => setView('posts');
    const Bookmark = () => setView('bookmark');

    return { view, Post, Bookmark, setView };
};