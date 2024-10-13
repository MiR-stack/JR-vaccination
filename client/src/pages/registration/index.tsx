import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import useRegistration from "./useRegistration";

export default function RegisterPage() {
  const { form, formFields, onSubmit, error } = useRegistration();

  return (
    <div className="container mx-auto p-4 max-w-md flex-1">
      <Card>
        <CardHeader>
          <CardTitle className="text-3xl font-bold">
            Vaccine Registration
          </CardTitle>
          <CardDescription>
            Register for your COVID-19 vaccination
          </CardDescription>
          {error && (
            <CardDescription className="text-red-400 capitalize">
              {error}
            </CardDescription>
          )}
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              {formFields.map((item) => {
                switch (item.type) {
                  case "select":
                    return (
                      <FormField
                        control={form.control}
                        name="vaccineCenter"
                        key={item.name}
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>{item.title}</FormLabel>
                            <Select
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                            >
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select a vaccine center" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                {item.options?.map((center) => (
                                  <SelectItem
                                    key={center.value}
                                    value={center.value}
                                  >
                                    {center.name}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                            <FormDescription>
                              {item.description}
                            </FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    );
                  default:
                    return (
                      <FormField
                        control={form.control}
                        name={item.name}
                        key={item.name}
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>{item.title}</FormLabel>
                            <FormControl>
                              <Input
                                type={item.type}
                                placeholder={item.placeholder}
                                {...field}
                              />
                            </FormControl>
                            <FormDescription>
                              {item.description}
                            </FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    );
                }
              })}

              <Button type="submit" className="w-full">
                Register
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}
