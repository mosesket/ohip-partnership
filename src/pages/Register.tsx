import axios from "axios";
import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useLocation } from "react-router-dom";
import { toast } from "sonner";

function Register() {
  const location = useLocation();
  const [partnerType, setPartnerType] = useState("ggp_partner");

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const partnerParam = searchParams.get("partner");

    if (partnerParam === "g20") {
      setPartnerType("g20_partner");
    } else if (partnerParam === "ggp") {
      setPartnerType("ggp_partner");
    }
  }, [location]);

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      first_name: "",
      last_name: "",
      email: "",
      phone: "",
      dob: "",
      gender: "",
      country: "",
      state: "",
      amount: "",
      currency_code: "USD",
      employment: "",
      date_of_remission: "",
      division_chapter: "",
      partner_type: "ggp_partner",
    },
  });

  const [currencies, setCurrencies] = useState<Currency[]>([]);

  interface Currency {
    id: number;
    code: string;
    name: string;
    symbol: string;
  }

  useEffect(() => {
    setValue("partner_type", partnerType);
  }, [partnerType, setValue]);

  useEffect(() => {
    const fetchCurrency = async () => {
      const response = await axios.get(
        "https://api.macwealth.org/api/currencies"
      );

      setCurrencies(response.data.data);
    };

    fetchCurrency();
  });

  interface FormData {
    first_name: string;
    last_name: string;
    email: string;
    phone: string;
    dob: string;
    gender: string;
    country: string;
    state: string;
    amount: string;
    currency_code: string;
    employment: string;
    date_of_remission: string;
    division_chapter: string;
    partner_type: string;
  }

  interface BasePayload {
    first_name: string;
    last_name: string;
    email: string;
    phone: string;
    dob: string;
    gender: string;
    country: string;
    state: string;
    amount: string;
    currency_code: string;
    division_chapter: string;
    partner_type: string;
  }

  interface G20Payload extends BasePayload {
    employment: string;
    date_of_remission: string;
  }

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    console.log(data);
    const loadingToastId = toast.loading("Processing signup...");

    try {
      const basePayload: BasePayload = {
        first_name: data.first_name,
        last_name: data.last_name,
        email: data.email,
        phone: data.phone,
        dob: data.dob,
        gender: data.gender,
        country: data.country,
        state: data.state,
        amount: data.amount,
        currency_code: data.currency_code,
        division_chapter: data.division_chapter,
        partner_type: data.partner_type,
      };

      let payload: BasePayload | G20Payload = basePayload;

      if (data.partner_type === "g20_partner") {
        payload = {
          ...basePayload,
          employment: data.employment,
          date_of_remission: data.date_of_remission,
        };
      }

      // const response = await axios.post(`${import.meta.env.VITE_API_URL}/partner/auth/register`, payload);
      const response = await axios.post(
        `https://api.macwealth.org/api/partner/auth/register`,
        payload
      );

      toast.dismiss(loadingToastId);

      if (response.data.status === 200) {
        reset({
          first_name: "",
          last_name: "",
          email: "",
          phone: "",
          dob: "",
          gender: "",
          country: "",
          state: "",
          amount: "",
          currency_code: "USD",
          employment: "",
          date_of_remission: "",
          division_chapter: "",
          partner_type: "ggp_partner",
        });

        toast.success(
          "Registration successful! Please check your email for login details.",
          { duration: 5000 }
        );
        
        setTimeout(() => {
          toast.info(
            `We've sent your login details to ${data.email}. If you don't see it in your inbox, please check your spam folder.`,
            { duration: 8000 }
          );
        }, 2000);
      } else {
        toast.error(
          response.data.message || "Registration failed. Please try again."
        );
        console.error("Error response:", response.data);
      }
    } catch (error) {
      toast.dismiss(loadingToastId);

      toast.error("Registration failed. Please try again.");
      console.error("Error submitting form:", error);

      if (axios.isAxiosError(error) && error.response) {
        console.error("Server response:", error.response.data);
      }
    }
  };

  return (
    <main className="min-h-screen flex justify-center items-center p-4 pt-30">
      <div className="w-full max-w-md">
        <form onSubmit={handleSubmit(onSubmit)}>
          <h2 className="text-3xl font-bold text-center">Sign Up</h2>
          <p className="mb-6 text-center">
            {partnerType === "ggp_partner"
              ? "GGP Partner Registration"
              : "G20 Partner Registration"}
          </p>

          <input
            type="hidden"
            id="partner_type"
            {...register("partner_type", {
              required: "Partner type is required",
            })}
          />

          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label htmlFor="first_name" className="font-semibold block mb-2">
                First Name
              </label>
              <input
                type="text"
                id="first_name"
                className="py-2 px-4 w-full border rounded-md border-gray-300"
                {...register("first_name", {
                  required: "First name is required",
                })}
              />
              {errors.first_name && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.first_name.message}
                </p>
              )}
            </div>
            <div>
              <label htmlFor="last_name" className="font-semibold block mb-2">
                Last Name
              </label>
              <input
                type="text"
                id="last_name"
                className="py-2 px-4 w-full border rounded-md border-gray-300"
                {...register("last_name", {
                  required: "Last name is required",
                })}
              />
              {errors.last_name && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.last_name.message}
                </p>
              )}
            </div>
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="font-semibold block mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="py-2 px-4 w-full border rounded-md border-gray-300"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address",
                },
              })}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          <div className="mb-4">
            <label htmlFor="phone" className="font-semibold block mb-2">
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              className="py-2 px-4 w-full border rounded-md border-gray-300"
              {...register("phone", { required: "Phone number is required" })}
            />
            {errors.phone && (
              <p className="text-red-500 text-sm mt-1">
                {errors.phone.message}
              </p>
            )}
          </div>

          <div className="mb-4">
            <label htmlFor="dob" className="font-semibold block mb-2">
              Date of Birth
            </label>
            <input
              type="date"
              id="dob"
              className="py-2 px-4 w-full border rounded-md border-gray-300"
              {...register("dob", { required: "Date of birth is required" })}
            />
            {errors.dob && (
              <p className="text-red-500 text-sm mt-1">{errors.dob.message}</p>
            )}
          </div>

          <div className="mb-4">
            <label htmlFor="gender" className="font-semibold block mb-2">
              Gender
            </label>
            <select
              id="gender"
              className="py-2 px-4 w-full border rounded-md border-gray-300"
              {...register("gender", { required: "Gender is required" })}
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
            {errors.gender && (
              <p className="text-red-500 text-sm mt-1">
                {errors.gender.message}
              </p>
            )}
          </div>

          <div className="mb-4">
            <label htmlFor="division_chapter" className="font-semibold block mb-2">
              Division/Chapter
            </label>
            <select
              id="division_chapter"
              className="py-2 px-4 w-full border rounded-md border-gray-300"
              {...register("division_chapter", { required: "Division/Chapter is required" })}
            >
              <option value="">Select Division/Chapter</option>
              <option value="HEADQUARTERS">HEADQUARTERS</option>
              <option value="NIGERIA">NIGERIA</option>
              <option value="INTERNATIONAL 1">INTERNATIONAL 1</option>
              <option value="INTERNATIONAL 2">INTERNATIONAL 2</option>
              <option value="ASIA">ASIA</option>
              <option value="AFRICA">AFRICA</option>
              <option value="EXTERNAL PARTNERS">EXTERNAL PARTNERS</option>
            </select>
            {errors.division_chapter && (
              <p className="text-red-500 text-sm mt-1">
                {errors.division_chapter.message}
              </p>
            )}
          </div>

          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label htmlFor="country" className="font-semibold block mb-2">
                Country
              </label>
              <input
                type="text"
                id="country"
                className="py-2 px-4 w-full border rounded-md border-gray-300"
                {...register("country", { required: "Country is required" })}
              />
              {errors.country && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.country.message}
                </p>
              )}
            </div>
            <div>
              <label htmlFor="state" className="font-semibold block mb-2">
                State
              </label>
              <input
                type="text"
                id="state"
                className="py-2 px-4 w-full border rounded-md border-gray-300"
                {...register("state", { required: "State is required" })}
              />
              {errors.state && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.state.message}
                </p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label htmlFor="amount" className="font-semibold block mb-2">
                Amount
              </label>
              <input
                type="number"
                id="amount"
                step="0.01"
                className="py-2 px-4 w-full border rounded-md border-gray-300"
                {...register("amount", { required: "Amount is required" })}
              />
              {errors.amount && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.amount.message}
                </p>
              )}
            </div>
            <div>
              <label
                htmlFor="currency_code"
                className="font-semibold block mb-2"
              >
                Currency
              </label>
              <select
                id="currency_code"
                className="py-2 px-4 w-full border rounded-md border-gray-300"
                {...register("currency_code", {
                  required: "Currency is required",
                })}
              >
                {currencies.map((currency: Currency) => (
                  <option key={currency.id} value={currency.code}>
                    {currency.code} - {currency.name}
                  </option>
                ))}
              </select>
              {errors.currency_code && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.currency_code.message}
                </p>
              )}
            </div>
          </div>

          {partnerType === "g20_partner" && (
            <>
              <div className="mb-4">
                <label
                  htmlFor="employment"
                  className="font-semibold block mb-2"
                >
                  Employment Status
                </label>
                <select
                  id="employment"
                  className="py-2 px-4 w-full border rounded-md border-gray-300"
                  {...register("employment", {
                    required:
                      partnerType === "g20_partner"
                        ? "Employment status is required"
                        : false,
                  })}
                >
                  <option value="">Select Employment Status</option>
                  <option value="freelance">Freelance</option>
                  <option value="self_employed">Self Employed</option>
                  <option value="full_time">Full Time</option>
                  <option value="part_time">Part Time</option>
                  <option value="contract">Contract</option>
                  <option value="retired">Retired</option>
                </select>
                {errors.employment && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.employment.message}
                  </p>
                )}
              </div>

              <div className="mb-4">
                <label
                  htmlFor="date_of_remission"
                  className="font-semibold block mb-2"
                >
                  Date of Remission
                </label>
                <input
                  type="date"
                  id="date_of_remission"
                  className="py-2 px-4 w-full border rounded-md border-gray-300"
                  {...register("date_of_remission", {
                    required:
                      partnerType === "g20_partner"
                        ? "Date of remission is required"
                        : false,
                  })}
                />
                {errors.date_of_remission && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.date_of_remission.message}
                  </p>
                )}
              </div>
            </>
          )}

          <button
            type="submit"
            className="w-full py-3 text-white bg-black rounded-md hover:bg-gray-800 transition mb-10"
          >
            Register
          </button>
        </form>
      </div>
    </main>
  );
}

export default Register;
