import React from "react";
import styles from "./Modal.module.css";

const Modal = ({props}) => {
    if(props){
        return (
            <div  className={styles.modal}>
                <div className={styles.modalContent}>
                    <p>Some text in the Modal..</p>
                </div>
            </div>
        );
    }else{
        return(<></>);
    }
 
};

export { Modal };