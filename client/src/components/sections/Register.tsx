import { useState } from "react";
import { Button } from "@/components/ui/button";

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    dob: "",
    address: "",
    subject: "",
    guardian: "",
    notes: "",
  });

  const [files, setFiles] = useState<File[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFiles(Array.from(e.target.files));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you'd send formData and files to your backend
    console.log(formData, files);
    alert("Form submitted!");
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 to-purple-100 p-8">
      <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-center text-purple-700 mb-6">Student Registration</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input name="name" type="text" placeholder="Full Name" value={formData.name} onChange={handleChange} className="w-full p-2 border rounded" required />
          <input name="email" type="email" placeholder="Email" value={formData.email} onChange={handleChange} className="w-full p-2 border rounded" required />
          <input name="phone" type="tel" placeholder="Phone Number" value={formData.phone} onChange={handleChange} className="w-full p-2 border rounded" required />
          <input name="dob" type="date" value={formData.dob} onChange={handleChange} className="w-full p-2 border rounded" />
          <input name="address" type="text" placeholder="Address" value={formData.address} onChange={handleChange} className="w-full p-2 border rounded" />
          <input name="subject" type="text" placeholder="Preferred Subjects" value={formData.subject} onChange={handleChange} className="w-full p-2 border rounded" />
          <input name="guardian" type="text" placeholder="Parent/Guardian Name" value={formData.guardian} onChange={handleChange} className="w-full p-2 border rounded" />
          <textarea name="notes" placeholder="Additional Notes" value={formData.notes} onChange={handleChange} className="w-full p-2 border rounded" rows={4} />
          <label className="block font-medium mt-4">Upload Documents (ID, Reports, etc.)</label>
          <input type="file" multiple onChange={handleFileChange} className="w-full" />

          <Button type="submit" className="w-full mt-4 bg-primary text-white py-2 rounded hover:bg-blue-600">Submit Registration</Button>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
