import React from 'react';
import classes from './PublicLayout.module.scss';
import Summer from "@/assets/images/PublicLayout/summer.jpeg";

interface IPrivateLayoutProps{
    children: React.ReactNode;
}
const PublicLayout: React.FC<IPrivateLayoutProps> = ({children}) => {
    return (
        <div className={classes.privateLayout}>
            <div>
                {children}
            </div>
            <div className={classes.seasonIllustrationWrapper}>
                <img className={classes.seasonIllustration} src={Summer} alt="Season"/>
            </div>
        </div>
    );
};

export default PublicLayout;