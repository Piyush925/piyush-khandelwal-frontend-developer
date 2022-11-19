import React, { useState, useEffect } from 'react';
import Pagination from './Pagination'
import { getCapsules } from './api/capsules';
import CardInfo from './Card';
import CapsuleModal from './CapsuleModal';

const SearchForm = () => {
    const [capsules, setCapsules] = useState({})
    const [type, setType] = useState('')
    const [isOpen, setOpen] = useState(false)
    const [capsuleId, setCapsuleId] = useState('')
    const [status, setStatus] = useState('')
    const [serial, setSerial] = useState('')
    const [searchQuery, setQuery] = useState({
        query: {},
        options: {
            limit: 12,
            page: 1
        }
    })

    const handleType = e => {
        setType(e.target.value)
    }

    const closeModal = () => {
        setOpen(false)
        setCapsuleId('')
    }

    const handleStatus = e => {
        setStatus(e.target.value)
    }

    const handleSerial = e => {
        setSerial(e.target.value)
    }

    const fetchCapsules = async (query) => {
        try {
            const res = await getCapsules(query)
            setCapsules(res.data)
        } catch (err) {
            console.log(err)
        }
    }

    const handleNext = () => {
        const query = { ...searchQuery };
        query.options.page = query.options.page + 1;
        setQuery(query)
    }

    const handleJump = (page) => {
        const query = { ...searchQuery };
        query.options.page = page;
        setQuery(query)
    }

    const handlePrev = () => {
        const query = { ...searchQuery };
        query.options.page = query.options.page - 1;
        setQuery(query)
    }

    useEffect(() => {
        fetchCapsules(searchQuery)
    }, [searchQuery])

    const onSearch = () => {
        const queries = { ...searchQuery };
        if(type) queries.query.type = type
        else delete queries.query.type
        if(status) queries.query.status = status
        else delete queries.query.status
        if(serial) queries.query.serial = serial.toUpperCase()
        else delete queries.query.serial
        setQuery(queries)
    }

    const showCapsuleDetails = (id) => {
        setOpen(true);
        setCapsuleId(id);
    }

    return (
        <div className='m-4'>
            <h4 className='m-4'>Search Form</h4>
            <div className='m-4 w-1/2 flex flex-wrap justify-around'>
                <select onChange={handleStatus} id="status"
                class="mb-4 rounded-lg border-2 border-gray-500 w-64 text-sm focus:ring-blue-500 focus:border-blue-500 block dark:border-gray-600 dark:placeholder-white-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 h-8">
                    <option value="" selected={status === ""}>Choose Status</option>
                    <option value="">None</option>
                    <option value="unknown" selected={status === "unknown"}>Unknown</option>
                    <option value="active" selected={status === "active"}>Active</option>
                    <option value="retired" selected={status === "retired"}>Retired</option>
                    <option value="destroyed" selected={status === "destroyed"}>Destroyed</option>
                </select>

                <input id='serial' onChange={handleSerial} placeholder='Enter Serial' className='mb-4 rounded-lg border-2 border-gray-500 lg:w-64 w-full' />

                <select onChange={handleType} id="type" 
                class="mb-4 rounded-lg border-2 border-gray-500 w-64 text-sm focus:ring-blue-500 focus:border-blue-500 block dark:border-gray-600 dark:placeholder-white-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 h-8">
                    <option value="" selected={status === ""}>Choose Type</option>
                    <option value="">None</option>
                    <option value="Dragon 1.0" selected={status === "Dragon 1.0"}>Dragon 1.0</option>
                    <option value="Dragon 1.1" selected={status === "Dragon 1.1"}>Dragon 1.1</option>
                    <option value="Dragon 2.0" selected={status === "Dragon 2.0"}>Dragon 2.0</option>
                </select>
                <button onClick={onSearch} className='rounded-lg w-64 h-8 bg-slate-800 text-white'>Search</button>
            </div>
            <div>
                <div className='m-4 flex flex-wrap justify-between'>
                    {capsules.docs?.length > 0 ? capsules.docs.map(capsule => (
                        <CardInfo capsule={capsule} showCapsuleDetails={showCapsuleDetails}/>
                    ))
                        : null}
                </div>
                <Pagination
                    currentPage={searchQuery.options.page}
                    totalPage={capsules.totalPages}
                    haxNext={capsules.hasNextPage}
                    haxPrev={capsules.hasPrevPage}
                    handleNext={handleNext}
                    handlePrev={handlePrev}
                    activePage={capsules.page}
                    handleJump={handleJump}
                />
            </div>
            {isOpen && <CapsuleModal 
            show={isOpen}
            capsuleId={capsuleId}
            closeModal={closeModal}
            />}
        </div>
    )
}

export default SearchForm