import React from 'react';

const Pagination = ({ activePage, totalPage, haxNext, haxPrev, handleNext, handlePrev, handleJump }) => {
    return (
        totalPage > 1 ?
            <div className='flex justify-center w-full overflow-auto'>
                <nav aria-label="Page navigation">
                    <ul className="inline-flex">
                        <li><button onClick={() => handleJump(1)} className="h-10 px-5 text-indigo-600 transition-colors duration-150 rounded-l-lg focus:shadow-outline hover:bg-indigo-100  border border-gray-800">
                            First
                        </button>
                        </li>
                        <li><button disabled={!haxPrev} onClick={handlePrev} className="h-10 px-5 text-indigo-600 transition-colors duration-150 focus:shadow-outline hover:bg-indigo-100  border border-gray-800">
                            <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" fill-rule="evenodd"></path></svg></button>
                        </li>
                        {[...Array(totalPage).keys()].map((item) =>
                            <li>
                                <button
                                    className={`h-10 px-5 ${activePage === item + 1 ? 'text-white bg-indigo-600' : 'text-indigo-600 hover:bg-indigo-100'}
                                                transition-colors duration-150 
                                                focus:shadow-outline 
                                                border border-gray-800`}
                                    onClick={() => handleJump(item + 1)}
                                >{item + 1}</button>
                            </li>
                        )}
                        <li><button disabled={!haxNext} onClick={handleNext} className="h-10 px-5 text-indigo-600 transition-colors duration-150 bg-white focus:shadow-outline hover:bg-indigo-100  border border-gray-800">
                            <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" fill-rule="evenodd"></path></svg></button>
                        </li>
                        <li><button onClick={() => handleJump(totalPage)} className="h-10 px-5 text-indigo-600 transition-colors duration-150 rounded-r-lg  focus:shadow-outline hover:bg-indigo-100  border border-gray-800">
                            Last
                        </button>
                        </li>
                    </ul>
                </nav>
            </div> : null
    )
}

export default Pagination;