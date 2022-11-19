import React, { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import { getCapsulesDetails } from './api/capsules';


const CapsuleModal = ({ show, capsuleId, closeModal }) => {
    const [capsule, setCapsule] = useState(null)

    const fetchCapsule = async (id) => {
        try {
            const res = await getCapsulesDetails(id)
            setCapsule(res.data)
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        fetchCapsule(capsuleId)
    }, [capsuleId])

    return (
        <Modal
            show={show}
            onHide={closeModal}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Capsule Detail
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className='p-2 grid grid-cols-2 grid-flow-row gap-4'>
                    <div>
                        <label className='block text-gray-500'>Name</label>
                        <span>{capsule?.serial}</span>
                    </div>
                    <div>
                        <label className='block text-gray-500'>Status</label>
                        <span>{capsule?.status}</span>
                    </div>
                    <div>
                        <label className='block text-gray-500'>Type</label>
                        <span>{capsule?.type}</span>
                    </div>
                    <div>
                        <label className='block text-gray-500'>Update</label>
                        <span>{capsule?.last_update}</span>
                    </div>
                    <div>
                        <label className='block text-gray-500'>Water Landing</label>
                        <span>{capsule?.water_landings}</span>
                    </div>
                    <div>
                        <label className='block text-gray-500'>Land Landing</label>
                        <span>{capsule?.land_landings}</span>
                    </div>
                </div>

            </Modal.Body>
        </Modal>
    )
}

export default CapsuleModal;