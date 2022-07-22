export const textMessageLogin = {
  COMPLETE_ALL_FIELDS:
    "Please complete all required fields with valid information",
  COMPLETE_PASSWORD_FIELD: "Be sure to type your password",
  COMPLETE_EMAIL_FIELD: "Be sure to type your email",
  EMAIL_OR_PASSWORD_INVALID: "Invalid email or password",
  COMPLETE_ALL_FIELDS_REQUIRED:
    "Please complete all required fields with valid information"
};

export const imgProjects = {
  projectOne:
    "https://res.cloudinary.com/chanel-princenzanzu/image/upload/v1645354446/JoinAfriqueLogo_dhzddy.png",
  projectJoinAdmin:
    "https://res.cloudinary.com/chanel-princenzanzu/image/upload/v1641466655/receptionAgent_cppcvd.png"
};

export const commandModel = [
  {
    id: 1,
    amount: 45, // $ 45 total of all panier
    user: {
      id: 8,
      name: "name ofCLient"
    },
    created: "07/02/2022",
    status: "PAYED",
    panier: [
      {
        nameProduct: "NameOfproduit_1", // dette technique
        product: 1, // id of product
        options: "OPTION_1",
        quantity: 5,
        priceUnit: 2,
        total: 10 //
      },
      {
        nameProduct: "NameOfproduit_1",
        product: 5,
        options: "OPTION_1",
        quantity: 5,
        priceUnit: 5,
        total: 25
      },
      {
        nameProduct: "",
        product: 3,
        options: "OPTION_1",
        quantity: 5,
        priceUnit: 2,
        total: 10
      }
    ]
  }
];

export enum STATUS_COMMAND {
  ONPENDING = "ONPENDING",
  PAYED = "PAYED"
}
export enum TAB_ADMIN {
  CLIENTS,
  PRODUCTS,
  CATEGORIES,
  COMMANDS
}

// text For showToast

export const textMessageSignUp = {
  COMPLETE_ALL_FIELDS_REQUIRED:
    "Please complete all required fields with valid information"
};
