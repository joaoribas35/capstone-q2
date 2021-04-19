import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import * as React from "react";

import FormRegister from "../../components/FormRegister";

describe("When I type the information", () => {
  it("form shold be the value", () => {
    render(<FormRegister />);
    const input_name = screen.getByTestId("test_input_name");
    const input_user_name = screen.getByTestId("test_input_user_name");
    const input_email = screen.getByTestId("test_input_email");
    const input_senha = screen.getByTestId("test_input_password");

    userEvent.type(input_name, "diego");
    userEvent.type(input_user_name, "diegosilva");
    userEvent.type(input_email, "diego@mail.com");
    userEvent.type(input_senha, "123456");

    expect(input_name).toHaveValue("diego");
    expect(input_user_name).toHaveValue("diegosilva");
    expect(input_email).toHaveValue("diego@mail.com");
    expect(input_senha).toHaveValue("123456");
  });
});

const mocked_handle_submit = jest.fn();

jest.mock("react-hook-form", () => {
  return {
    useForm: () => ({
      handleSubmit: mocked_handle_submit,
      formState: {
        errors: {
          name: "name",
          userName: "username",
          email: "email",
          password: "password",
        },
      },
      register: jest.fn(),
    }),
  };
});

describe("When submits the form", () => {
  it("Should call handleSubmit", () => {
    render(<FormRegister />);

    const form = screen.getByTestId("test_form");
    const input_name = screen.getByTestId("test_input_name");
    const input_user_name = screen.getByTestId("test_input_user_name");
    const input_email = screen.getByTestId("test_input_email");
    const input_senha = screen.getByTestId("test_input_password");

    userEvent.type(input_name, "Diego");
    userEvent.type(input_user_name, "diegosilva");
    userEvent.type(input_email, "diego@mail.com");
    userEvent.type(input_senha, "123456");
    fireEvent.submit(form);

    expect(mocked_handle_submit).toHaveBeenCalled();
  });
});
