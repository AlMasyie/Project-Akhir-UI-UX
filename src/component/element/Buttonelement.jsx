import React from 'react';
import Button from 'react-bootstrap/Button';

export default function Buttonelement({id, fw, br, width, height, content, arrow, fs, onClick, classname}) {
    return (
        <Button 
            onClick={onClick}
            id={id} 
            className={`buttonelement ${classname}`}
            variant="primary" 
            style={{ 
                backgroundColor: '#1F79E5', // Warna latar belakang tombol
                borderColor: '#1F79E5',     // Warna border tombol
                color: 'white',             // Warna teks tombol
                fontWeight: fw,
                borderRadius: br ? br : '10px',
                fontFamily: 'Roboto',
                fontSize: 16,
                width: width ? width : '350px',
                padding: "20px",
                height : '50px'
            }}>
            {content}
            {arrow && 
                <span style={{color:'white', marginLeft:'26px'}} className="material-symbols-outlined">
                    arrow_forward
                </span>
            }
        </Button>
    );
}
