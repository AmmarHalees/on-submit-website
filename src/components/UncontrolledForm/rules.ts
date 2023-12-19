const RulesMap = {
  firstName: {
    required: {
      value: true,
      message: "First name is required",
    },
    min: {
      value: 2,
      message: "First name must be at least 2 characters",
    },
    max: {
      value: 20,
      message: "First name must be at most 20 characters",
    },
  },
  lastName: {
    required: {
      value: true,
      message: "Last name is required",
    },
    min: {
      value: 2,
      message: "Last name must be at least 2 characters",
    },
    max: {
      value: 20,
      message: "Last name must be at most 20 characters",
    },
  },
  portfolio: {
    pattern: {
      value: /^https?:\/\/[\w-]+(\.[\w-]+)+[/#?]?.*$/,
      message: "Portfolio must be a valid URL",
    },
  },
  bio: {
    min: {
      value: 50,
      message: "Bio must be at least 50 characters",
    },
    pattern: {
      value: /^[a-zA-Z0-9_ ]*$/,
      message: "Bio must be a valid bio",
    },
    max: {
      value: 100,
      message: "Bio must be at most 100 characters",
    },
  },
  phone: {
    pattern: {
      value: /^\+?[0-9]{10,14}$/,
      message: "Phone number must be a valid phone number",
    },
  },
  email: {
    required: {
      value: true,
      message: "Email is required",
    },
    min: {
      value: 5,
      message: "Email must be at least 5 characters",
    },

    pattern: {
      value: /^\S+@\S+\.\S+$/,
      message: "Email must be a valid email",
    },
  },
  startHour: {
    pattern: {
      value: /^([01]?[0-9]|2[0-3]):[0-5][0-9]$/,
      message: "Start hour must be a valid hour",
    },
  },
  endHour: {
    pattern: {
      value: /^([01]?[0-9]|2[0-3]):[0-5][0-9]$/,
      message: "End hour must be a valid hour",
    },
  },
  speciality: {
    required: {
      value: true,
      message: "Speciality is required",
    },
  },
  //   profilePicture: {
  //     required: {
  //       value: true,
  //       message: "Profile picture is required",
  //     },
  //   },
};

export default RulesMap;
