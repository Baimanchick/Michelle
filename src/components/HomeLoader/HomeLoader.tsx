import React, { useState, useEffect } from 'react';
import { Flex, Typography } from 'antd';
import { ReactComponent as Logo } from "../../assets/svgs/home/Layer 1.svg";
import styles from "./homeLoader.module.scss";
import { useNavigate } from 'react-router-dom';

const languageItems = ["Русский", "Кыргызча", "English", "Türkçe"];

function HomeLoader() {
    const navigate = useNavigate();
    const [selectedLanguage, setSelectedLanguage] = useState(() => {
        return localStorage.getItem('selectedLanguage') || "Русский";
    });

    useEffect(() => {
        localStorage.setItem('selectedLanguage', selectedLanguage);
    }, [selectedLanguage]);

    const handleLanguageSelect = (language: string) => {
        localStorage.setItem('selectedLanguage', language);
        navigate('/categories');
    };

    return (
        <Flex className={styles.container}>
            <Flex>
                <Logo />
            </Flex>
            <Flex>
                <ul className={styles.navigation}>
                    {languageItems.map((item, index) => (
                        <li
                            className={`${styles.navigation__item} ${item === selectedLanguage ? styles.selected : ''}`}
                            key={index}
                            onClick={() => handleLanguageSelect(item)}
                        >
                            {item}
                        </li>
                    ))}
                </ul>
            </Flex>
            <Flex>
                <h1 className={styles.title}>МЕНЮ</h1>
            </Flex>
        </Flex>
    );
}

export default HomeLoader;
