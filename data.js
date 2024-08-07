var database = {
    config: {
        pip: false,
        add_tax: false,
        require_emp_state_tips: true,
        emp_break_tracking: true,
        emp_time_tracking: true,
    },
    tickets: [
        {
            id: 'abcd-1234-abcd-1234',
            cart: [
                {
                    quantity: 1,
                    options: [
                        { label: 'option1', price: 1295, selected: true },
                        { label: 'option2', price: 125, selected: true },
                        { label: 'option3', price: 1505, selected: true },
                    ],
                },
            ],
            payment_method: null, // null = not paid -- otherwise 'credit', 'cash', 'voucher/coupon', other??
            sub_total: 950,
            tips: 0,
            closed: false,
        },
        {
            id: '1234-abcd-1234-abcd',
            cart: [
                {
                    quantity: 1,
                    options: [
                        { label: 'option1', price: 1295, selected: true },
                        { label: 'option2', price: 125, selected: true },
                        { label: 'option3', price: 1505, selected: true },
                    ],
                },
            ],
            payment_method: 'credit',
            sub_total: 950,
            tips: 0,
            closed: false,
        },
    ],
    types: [
        {
            id: 1,
            name: 'Beverages',
            types: [
                {
                    id: 10,
                    name: 'Sodas',
                    types: null,
                },
                {
                    id: 11,
                    name: 'Beer',
                    types: null,
                },
                {
                    id: 12,
                    name: 'Cocktails',
                    types: null,
                },
            ],
        },
        {
            id: 2,
            name: 'Food',
            types: [
                {
                    id: 20,
                    name: 'Chicken',
                    types: null,
                },
                {
                    id: 21,
                    name: 'Beef',
                    types: null,
                },
                {
                    id: 22,
                    name: 'Sides',
                    types: null,
                },
            ],
        },
    ],
    menu: [
        {
            id: '12345',
            type: 11,
            name: 'Bud Light',
            price: 850,
            tax: 45,
            options: [
                { label: 'option1', price: 1295, selected: true },
                { label: 'option2', price: 125, selected: true },
                { label: 'option3', price: 1505, selected: true },
            ],
        },
        {
            id: '12345',
            type: 11,
            name: 'White Claw',
            price: 850,
            tax: 45,
            options: [
                { label: 'option1', price: 1295, selected: true },
                { label: 'option2', price: 125, selected: true },
                { label: 'option3', price: 1505, selected: true },
            ],
        },
        {
            name: 'Cheese Burger',
            type: 21,
            price: 1375,
            tax: 105,
            options: [
                { label: 'option1', price: 1295, selected: true },
                { label: 'option2', price: 125, selected: true },
                { label: 'option3', price: 1505, selected: true },
            ],
        },
        {
            name: 'Hamburger',
            type: 21,
            price: 1550,
            tax: 105,
            options: [
                { label: 'option1', price: 1295, selected: true },
                { label: 'option2', price: 125, selected: true },
                { label: 'option3', price: 1505, selected: true },
            ],
        },
    ],
    users: [
        {
            name: 'John Doe',
            pin: 124085, //TODO Encrypt this
            active_tickets: ['abcd-1234-abcd-1234', '1234-abcd-1234-abcd'],
            pay_period_time: 0,
            shift_time: 0,
            admin_notes: {
                note_1: {
                    note: 'Failed to show up to work',
                    date: '6/1/15',
                    points: 4,
                },
                note_2: {
                    note: 'Stayed late to help the team',
                    date: '6/12/15',
                    points: 0,
                },
            },
        },
    ],
};
