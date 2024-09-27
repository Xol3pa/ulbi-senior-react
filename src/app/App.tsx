
import { Link } from "react-router-dom";
import { useTheme } from "./providers/ThemeProvider";
import { classNames } from "shared/lib/classNames/classNames";
import './styles/index.scss'
import { AppRouter } from "./providers/router";
import { Navbar } from "widgets/Navbar";
import { Sidebar } from "widgets/Sidebar";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";
import { Suspense } from "react";
import { useTranslation } from "react-i18next";



const App = () => {
    const { theme } = useTheme();

    return (
        <div className={classNames('app', { 'selected': true, 'hovered': true }, [theme])}>
            <Suspense fallback="">
                <Navbar />
                <div className="content-page">
                    <Sidebar />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    )
}

export default App