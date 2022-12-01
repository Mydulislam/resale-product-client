import React from 'react';

const ConfirmationalModal = ({title, closeModal, handleDelete, deleteData, deleteButton}) => {
    return (
        <div>
            {/* Put this part before </body> tag */}
            <input type="checkbox" id="confirmation-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">{title}</h3>
                    <div className="modal-action">
                        <label onClick={()=>handleDelete(deleteData)} htmlFor="confirmation-modal" className="btn">{deleteButton}</label>
                        <label onClick={closeModal} htmlFor="confirmation-modal" className="btn btn-outline">Cancel</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ConfirmationalModal;