import React from 'react'
import { Modal } from 'reactstrap'
import styles from "./CenteredModal.module.scss"
const CenteredModal = props => (
    <Modal
        className={styles.modal}
        {...props}
      >
        {props.children}
      </Modal>
)

export default CenteredModal;