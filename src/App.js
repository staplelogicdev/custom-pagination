import './App.css';
import Pagination from './pagination/Pagination';
import data from "./data.json"
import { useState } from 'react';

function App() {
  // User is currently on this page
const [currentPage, setCurrentPage] = useState(1)

// No of Records to be displayed on each page   
const [recordsPerPage ,setRecordsPage] = useState(25);

const indexOfLastRecord = currentPage * recordsPerPage;
const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;

const currentRecords = data.slice(indexOfFirstRecord, 
  indexOfLastRecord);

console.log(currentRecords , 'dsdsd')
console.log(recordsPerPage , 'recordsPerPage')

const nPages = Math.ceil(data.length / recordsPerPage)

  return (
    <div>
      <Pagination
      tabledata={currentRecords}
      nPages = { nPages }
      currentPage = { currentPage }
      setCurrentPage = { setCurrentPage }
      setRecordsPage = { setRecordsPage}
      recordsPerPage= {recordsPerPage}
      />

      
    </div>
  );
}

export default App;
