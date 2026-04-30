import React from 'react'

const GS_customer_controler = () => {
    const fields = [
        {
            label: 'Item Code',
            type: 'input',
            inputType: 'text',
            name: 'itemCategory',
        },
        {
            label: 'Purchase Unit',
            type: 'select',
            options: ['[Selected]'],
            name: 'unit',
        },
        {
            label: 'Supplier Number',
            type: 'input',
            inputType: 'number',
            name: 'minQty',
        },
        {
            label: 'Project',
            type: 'input',
            inputType: 'number',
            name: 'minQty',
        },
        {
            label: 'Quantity',
            type: 'input',
            inputType: 'number',
            name: 'unitPrice',
        },
        {
            label: 'Discount %',
            type: 'input',
            inputType: 'number',
            name: 'unitPrice',
        },
        {
            label: 'Margin %',
            type: 'input',
            inputType: 'number',
            name: 'unitPrice',
        },
        {
            label: 'Commission %',
            type: 'input',
            inputType: 'number',
            name: 'unitPrice',
        },

    ];
  return {fields}
}

export default GS_customer_controler
