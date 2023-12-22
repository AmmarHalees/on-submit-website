import { NameRuleMap } from "onsubmit/types";

const RulesMap: NameRuleMap = {
  firstName: {
    required: {
      criterion: true,
      message: "First name is required",
    },
    minLength: {
      criterion: 5,
      message: "First name must be at least 5 characters",
    },
    maxLength: {
      criterion: 20,
      message: "First name must be at most 20 characters",
    },
    pattern: {
      criterion: /^[a-zA-Z0-9_ ]*$/,
      message: "First name must be a valid name",
    },
  },
  lastName: {
    required: {
      criterion: true,
      message: "Last name is required",
    },
    minLength: {
      criterion: 5,
      message: "Last name must be at least 5 characters",
    },
    maxLength: {
      criterion: 20,
      message: "Last name must be at most 20 characters",
    },
  },
  portfolio: {
    pattern: {
      criterion: /^https?:\/\/[\w-]+(\.[\w-]+)+[/#?]?.*$/,
      message: "Portfolio must be a valid URL",
    },
  },
  bio: {
    minLength: {
      criterion: 50,
      message: "Bio must be at least 50 characters",
    },
    pattern: {
      criterion: /^[a-zA-Z0-9_ ]*$/,
      message: "Bio must be a valid bio",
    },
    maxLength: {
      criterion: 100,
      message: "Bio must be at most 100 characters",
    },
  },
  phoneNumber: {
    pattern: {
      criterion: /^\+?[0-9]{10,14}$/,
      message: "Phone number must be a valid phone number",
    },
  },
  email: {
    required: {
      criterion: true,
      message: "Email is required",
    },
    minLength: {
      criterion: 5,
      message: "Email must be at least 5 characters",
    },

    pattern: {
      criterion: /^\S+@\S+\.\S+$/,
      message: "Email must be a valid email",
    },
  },
  startHour: {
    required: {
      criterion: true,
      message: "Start hour is required",
    },
    pattern: {
      criterion: /^([01]?[0-9]|2[0-3]):[0-5][0-9]$/,
      message: "Start hour must be a valid hour",
    },
  },
  endHour: {
    required: {
      criterion: true,
      message: "End hour is required",
    },
    pattern: {
      criterion: /^([01]?[0-9]|2[0-3]):[0-5][0-9]$/,
      message: "End hour must be a valid hour",
    },
  },
  speciality: {
    required: {
      criterion: true,
      message: "Speciality is required",
    },
  },
  //   profilePicture: {
  //     required: {
  //       criterion: true,
  //       message: "Profile picture is required",
  //     },
  //   },
};

export default RulesMap;
