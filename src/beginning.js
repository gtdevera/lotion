import React, { useState, useRef, useEffect } from 'react';
import useToggle from './toggleFile';
import { useNavigate, useParams, Outlet } from 'react-router-dom';

function Beginning() {
    const navigate = useNavigate();
    navigate(/notes/1);
}

export default Beginning;