// components/DataTable.js
import React, { useEffect } from 'react';
import DataTable from 'datatables.net-dt';
import 'datatables.net-dt/css/jquery.dataTables.min.css'; // Impor CSS DataTables
import 'datatables.net-dt/js/dataTables.dataTables.min.js'; // Impor JavaScript DataTables


function DataTableComponent({ children, ...props }) {

  useEffect(() => {
    // Pastikan kita berada di sisi klien (browser)
    if (typeof window !== 'undefined') {
      const table = new DataTable('.datatable', props);
      
      // Bersihkan DataTable saat komponen dilepas
      return () => {
        if (table) {
          table.destroy();
        }
      };
    }
  }, []);

  return (
    <table className="table table-borderless datatable">
      {children}
    </table>
  );
}

export default DataTableComponent;
