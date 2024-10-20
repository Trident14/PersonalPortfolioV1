import React from 'react';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';

const Header = () => {
    return (
        <motion.div 
            className="header-container"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
        >
            <motion.h1
                className="changing-greeting"
                initial={{ scale: 1 }}
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
            >
                <Typewriter
                    words={['Hello', 'Hola', 'Bonjour', 'こんにちは', '안녕하세요']}
                    loop={true}
                    cursor
                    cursorStyle='_'
                    typeSpeed={100}
                    deleteSpeed={50}
                    delaySpeed={1000}
                />
            </motion.h1>
            <h2 style={{ fontSize: '3rem', fontWeight: 'bold' }}>
                I am <span className="highlight">Inesh Sekar</span>
            </h2>
        </motion.div>
    );
};

export default Header;
