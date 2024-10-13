import { useToast } from "@/hooks/use-toast";
import getUrl from "@/utils/getUrl";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  vaccineCenter: z.string().min(1, {
    message: "Please select a vaccine center.",
  }),
  nid: z.string().min(10, {
    message: "NID must be at least 10 characters.",
  }),
});

interface optionType {
  value: string;
  name: string;
}

interface FieldType {
  title: string;
  placeholder?: string;
  name: "name" | "email" | "vaccineCenter" | "nid";
  type: string;
  description: string;
  options?: optionType[];
}

interface CenterType {
  name: string;
  _id: string;
}

function useRegistration() {
  const [centers, setCenters] = useState<optionType[]>([]);

  useEffect(() => {
    (async () => {
      const url = getUrl("/centers?fields=_id,name");
      const res = await fetch(url);
      let centers = await res.json();

      centers = centers.data.map((center: CenterType) => {
        return { name: center.name, value: center._id };
      });
      setCenters(centers);
    })();
  }, []);

  const formFields: FieldType[] = [
    {
      title: "Name",
      name: "name",
      placeholder: "John Doe",
      type: "text",
      description: "Enter your full name as it appears on your ID.",
    },
    {
      title: "Email",
      name: "email",
      placeholder: "johndoe@example.com",
      type: "email",
      description: " We'll use this email to send you confirmation details.",
    },
    {
      title: "National ID (NID)",
      name: "nid",
      type: "number",
      placeholder: "Enter your NID number",
      description: "Your National ID number is required for verification.",
    },
    {
      title: "Vaccine Center",
      name: "vaccineCenter",
      type: "select",
      placeholder: "Select a Vaccine Center",
      description: "Choose your preferred vaccination center.",
      options: centers,
    },
  ];

  const { toast } = useToast();

  const initValues = {
    name: "",
    email: "",
    vaccineCenter: "",
    nid: "",
  };

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { ...initValues },
  });

  const [error, setError] = useState("");

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const { name, email, nid, vaccineCenter } = values;

    const user = { name, email, nid, vaccineCenterId: vaccineCenter };

    const url = getUrl("/users/registration");

    const headers = {
      "Content-Type": "application/json",
    };

    const body = JSON.stringify(user);

    const res = await fetch(url, {
      method: "POST",
      headers,
      body,
    });

    const { msg }: { msg: string } = await res.json();

    if (msg) {
      if (msg.includes("duplicate key")) {
        setError("email already used in another account");
      } else {
        setError(msg);
      }

      return;
    }

    setError("");
    form.reset({}, { keepValues: false });
    toast({
      title: "Registration Submitted",
      description: "Your registration has been successfully submitted.",
    });
  }

  return { formFields, form, onSubmit, error };
}

export default useRegistration;
