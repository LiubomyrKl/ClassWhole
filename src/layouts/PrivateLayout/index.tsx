import React from 'react';
import classes from './PrivateLayout.module.scss';
import Summer from "@/assets/images/PublicLayout/summer.jpeg";

interface IPrivateLayoutProps{
    children: React.ReactNode;
}
const PrivateLayout: React.FC<IPrivateLayoutProps> = ({children}) => {
    return (
        <div className={classes.privateLayout}>
            <div>
                {children}
            </div>
            <div className={classes.seasonIllustration}/>
        </div>
    );
};

export default PrivateLayout;