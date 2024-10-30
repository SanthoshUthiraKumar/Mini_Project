import React from 'react';
import './ProductList.css';  // Import the CSS file
import cnc from './images/cnc.jpg';
const products = [
      { id: 1, company: 'Company A', product: 'CNC Machine 1', manufacturingDate: '2022-01-15', customer: 'Customer 1', soldDate: '2022-02-20', status: 'Running' },
      { id: 2, company: 'Company B', product: 'CNC Machine 2', manufacturingDate: '2022-03-01', customer: 'Customer 2', soldDate: '2022-04-10', status: 'Maintenance Needed' },
      { id: 3, company: 'Company C', product: 'CNC Machine 3', manufacturingDate: '2021-12-12', customer: 'Customer 3', soldDate: '2022-01-15', status: 'No Issues' },
      { id: 4, company: 'Company D', product: 'CNC Machine 4', manufacturingDate: '2021-11-05', customer: 'Customer 4', soldDate: '2022-01-20', status: 'Running' },
      { id: 5, company: 'Company E', product: 'CNC Machine 5', manufacturingDate: '2022-02-18', customer: 'Customer 5', soldDate: '2022-03-22', status: 'No Issues' },
      { id: 6, company: 'Company F', product: 'CNC Machine 6', manufacturingDate: '2021-10-01', customer: 'Customer 6', soldDate: '2022-01-05', status: 'Maintenance Needed' },
      { id: 7, company: 'Company G', product: 'CNC Machine 7', manufacturingDate: '2021-09-15', customer: 'Customer 7', soldDate: '2021-12-20', status: 'Running' },
      { id: 8, company: 'Company H', product: 'CNC Machine 8', manufacturingDate: '2022-03-10', customer: 'Customer 8', soldDate: '2022-04-15', status: 'No Issues' },
      { id: 9, company: 'Company I', product: 'CNC Machine 9', manufacturingDate: '2021-08-25', customer: 'Customer 9', soldDate: '2021-11-30', status: 'Running' },
      { id: 10, company: 'Company J', product: 'CNC Machine 10', manufacturingDate: '2022-01-25', customer: 'Customer 10', soldDate: '2022-03-10', status: 'No Issues' },
      { id: 11, company: 'Company K', product: 'CNC Machine 11', manufacturingDate: '2021-07-20', customer: 'Customer 11', soldDate: '2021-10-15', status: 'Running' },
      { id: 12, company: 'Company L', product: 'CNC Machine 12', manufacturingDate: '2022-02-01', customer: 'Customer 12', soldDate: '2022-03-25', status: 'Maintenance Needed' },
      { id: 13, company: 'Company M', product: 'CNC Machine 13', manufacturingDate: '2022-01-05', customer: 'Customer 13', soldDate: '2022-02-28', status: 'Running' },
      { id: 14, company: 'Company N', product: 'CNC Machine 14', manufacturingDate: '2021-06-30', customer: 'Customer 14', soldDate: '2021-09-20', status: 'No Issues' },
      { id: 15, company: 'Company O', product: 'CNC Machine 15', manufacturingDate: '2022-03-05', customer: 'Customer 15', soldDate: '2022-04-20', status: 'Running' },
      { id: 16, company: 'Company P', product: 'CNC Machine 16', manufacturingDate: '2021-09-30', customer: 'Customer 16', soldDate: '2022-01-25', status: 'Maintenance Needed' },
      { id: 17, company: 'Company Q', product: 'CNC Machine 17', manufacturingDate: '2022-02-22', customer: 'Customer 17', soldDate: '2022-03-30', status: 'No Issues' },
      { id: 18, company: 'Company R', product: 'CNC Machine 18', manufacturingDate: '2021-10-25', customer: 'Customer 18', soldDate: '2022-01-10', status: 'Running' },
      { id: 19, company: 'Company S', product: 'CNC Machine 19', manufacturingDate: '2022-03-18', customer: 'Customer 19', soldDate: '2022-04-25', status: 'No Issues' },
      { id: 20, company: 'Company T', product: 'CNC Machine 20', manufacturingDate: '2021-11-01', customer: 'Customer 20', soldDate: '2022-01-18', status: 'Maintenance Needed' },
      { id: 21, company: 'Company U', product: 'CNC Machine 21', manufacturingDate: '2022-02-28', customer: 'Customer 21', soldDate: '2022-04-05', status: 'Running' },
      { id: 22, company: 'Company V', product: 'CNC Machine 22', manufacturingDate: '2021-08-30', customer: 'Customer 22', soldDate: '2021-11-15', status: 'No Issues' },
      { id: 23, company: 'Company W', product: 'CNC Machine 23', manufacturingDate: '2021-09-10', customer: 'Customer 23', soldDate: '2021-12-05', status: 'Running' },
      { id: 24, company: 'Company X', product: 'CNC Machine 24', manufacturingDate: '2022-01-12', customer: 'Customer 24', soldDate: '2022-03-01', status: 'Maintenance Needed' },
      { id: 25, company: 'Company Y', product: 'CNC Machine 25', manufacturingDate: '2022-03-15', customer: 'Customer 25', soldDate: '2022-04-30', status: 'Running' },
      { id: 26, company: 'Company Z', product: 'CNC Machine 26', manufacturingDate: '2021-07-10', customer: 'Customer 26', soldDate: '2021-09-30', status: 'No Issues' },
      { id: 27, company: 'Company A1', product: 'CNC Machine 27', manufacturingDate: '2022-02-05', customer: 'Customer 27', soldDate: '2022-03-15', status: 'Running' },
      { id: 28, company: 'Company B1', product: 'CNC Machine 28', manufacturingDate: '2021-10-20', customer: 'Customer 28', soldDate: '2022-01-02', status: 'Maintenance Needed' },
      { id: 29, company: 'Company C1', product: 'CNC Machine 29', manufacturingDate: '2022-03-02', customer: 'Customer 29', soldDate: '2022-04-12', status: 'No Issues' },
      { id: 30, company: 'Company D1', product: 'CNC Machine 30', manufacturingDate: '2021-09-05', customer: 'Customer 30', soldDate: '2021-12-10', status: 'Running' },
    ];

function ProductList() {
  return (
    <div className="product-grid-container">
      <h2>Manufacturing Companies' Products</h2>
      <div className="product-grid">
        {products.map(product => (
          <div key={product.id} className="product-tile">
            <img src={cnc} alt={"cnc"} className="product-image" />
            <h3>{product.product}</h3>
            <p><strong>Company:</strong> {product.company}</p>
            <p><strong>Manufactured on:</strong> {product.manufacturingDate}</p>
            <p><strong>Customer:</strong> {product.customer}</p>
            <p><strong>Sold on:</strong> {product.soldDate}</p>
            <p className={`status ${product.status.replace(' ', '')}`}>{product.status}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
