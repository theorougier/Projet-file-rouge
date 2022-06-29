import React from 'react'
import axios from "axios";

export default function useUser() {
    function getUser() {
        axios.get("http://localhost:5000/api/auth", {})
    }

    return {}
}