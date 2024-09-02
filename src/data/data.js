import { iconsImgs } from "../utils/images";
import { personsImgs } from "../utils/images";

export const navigationLinks = [
    { id: 1, title: 'Home', image: iconsImgs.home },
    { id: 2, title: 'Budget', image: iconsImgs.budget },
    { id: 3, title: 'Transactions', image: iconsImgs.plane },
    { id: 4, title: 'Subscriptions', image: iconsImgs.wallet },
    { id: 5, title: 'Mining', image: iconsImgs.bills },
    { id: 6, title: 'Reports', image: iconsImgs.report },
    { id: 7, title: 'Savings', image: iconsImgs.wallet },
    { id: 8, title: 'Explore Nft', image: iconsImgs.wealth },
    { id: 9, title: 'Account', image: iconsImgs.user },
    { id: 10, title: 'Settings', image: iconsImgs.gears }
];

export const transactions = [
    {
        id: 11, 
        name: "Usd Tether",
        image: personsImgs.person_four,
        date: "01/09/24",
        amount: 19030
    },
    {
        id: 12, 
        name: "Paypal Usd",
        image: personsImgs.person_three,
        date: "23/08/24",
        amount: 12100
    },
    {
        id: 13, 
        name: "Bnb",
        image: personsImgs.person_two,
        date: "23/08/24",
        amount: 2000
    }
];

export const reportData = [
    {
        id: 14,
        month: "Jan",
        value1: 45,
        value2: null
    },
    {
        id: 15,
        month: "Feb",
        value1: 45,
        value2: 60
    },
    {
        id: 16,
        month: "Mar",
        value1: 45,
        value2: null
    },
    {
        id: 17,
        month: "Apr",
        value1: 45,
        value2: null
    },
    {
        id: 18,
        month: "May",
        value1: 45,
        value2: null
    }
];

export const budget = [
    {
        id: 19, 
        title: "Subscriptions",
        type: "Automated",
        amount: 2200
    },
    {
        id: 20, 
        title: "Loan Payment",
        type: "Automated",
        amount: 16000
    },
    {
        id: 21, 
        title: "Foodstuff",
        type: "Automated",
        amount: 1500
    },
    {
        id: 22, 
        title: "Subscriptions",
        type: null,
        amount: 1000
    },
    {
        id: 23, 
        title: "Subscriptions",
        type: null,
        amount: 4000
    }
];

export const subscriptions = [
    {
        id: 24,
        title: "LinkedIn",
        due_date: "01/09/24",
        amount: 2000
    },
    {
        id: 25,
        title: "Netflix",
        due_date: "01/09/24",
        amount: 50
    },
    {
        id: 26,
        title: "VPN",
        due_date: "01/09/24",
        amount: 50
    }
];

export const savings = [
    {
        id: 27,
        image: personsImgs.person_one,
        saving_amount: 25000,
        title: "Pay kid bro’s fees",
        date_taken: "21/08/24",
        amount_left: 8000
    }
]