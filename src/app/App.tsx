
import { Link } from "react-router-dom";
import { useTheme } from "./providers/ThemeProvider";
import { classNames } from "shared/lib/classNames/classNames";
import './styles/index.scss'
import { AppRouter } from "./providers/router";


const App = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <div className={classNames('app', { 'selected': true, 'hovered': true }, [theme])}>

            <button onClick={toggleTheme}>TOGGLE</button>

            <Link to='/about'>AboutPage</Link>
            <Link to='/'>MainPage</Link>
            <AppRouter></AppRouter>

        </div>
    )
}

export default App