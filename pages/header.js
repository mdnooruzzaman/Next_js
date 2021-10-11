import headerStyles from '../styles/Header.module.css';

const Header = () => {
    return(
        <div className = {headerStyles}>
            <h1 className>
                <span>webDev</span> News
            </h1>

            <style jsx>
                {`
                    .title{
                        color: red
                    }
                `}
            </style>
        </div>

    )
}
export default Header;
