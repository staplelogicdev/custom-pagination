import React from 'react'

const Pagination = ({ tabledata, nPages, currentPage, setCurrentPage , setRecordsPage ,recordsPerPage }) => {

    console.log(tabledata)

    const nextPage = () => {
        if (currentPage !== nPages)
            setCurrentPage(currentPage + 1)
    }
    const prevPage = () => {
        if (currentPage !== 1)
            setCurrentPage(currentPage - 1)
    }

    const pageNumbers = [...Array(nPages + 1).keys()].slice(1)
    console.log(pageNumbers)


    console.log(tabledata)
    return (

        <>
            <table className='table' style={{textAlign: 'center'}}>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Gender</th>
                        <th>Email</th>
                        <th>Mobile no.</th>
                        <th>Occupation</th>

                    </tr>
                </thead>

                <tbody>

                    {tabledata.map(item => {
                        return (
                            <tr>
                                <td>
                                    {item.Name}

                                </td>
                                <td>
                                    {item.Gender}
                                </td>
                                <td>
                                    {item.Email}
                                </td>
                                <td>
                                    {item.Mobile}
                                </td>
                                <td>
                                    {item.Occupation}
                                </td>
                            </tr>

                        )
                    })}

                </tbody>

            </table>


            <nav style={{ display: 'flex' , justifyContent:'center' }} >

                <select defaultValue={recordsPerPage} onChange={(e)=> setRecordsPage(e.target.value)} class="form-select" aria-label="Default select example" style={{ width: 78 , height: 39, justifyContent: 'center' , marginRight: 5}}>
                    
                    <option value="25">25</option>
                    <option value="50">50</option>
                    <option value="100">100</option>
                </select>


                <ul className='pagination justify-content-center'>

                    <li className='page-item'>

                        <a className='page-link'
                            onClick={prevPage}
                            href='#'
                        >
                            Previous
                        </a>

                    </li>

                    {pageNumbers.map(pgNumber => {

                        return (

                            <li key={pgNumber} className={`page-item ${currentPage == pgNumber ? 'active' : ''} `}>

                                <a onClick={() => setCurrentPage(pgNumber)}
                                    className='page-link'
                                    href='#'>
                                    {pgNumber}
                                </a>


                            </li>
                        )

                    })}


                    <li className='page-item'>

                        <a className='page-link' onClick={nextPage} href='#'>
                            Next

                        </a>
                    </li>
                </ul>

            </nav>



        </>
    )

}

export default Pagination