import React, { useState } from 'react';
import {
  Box,
  Grid,
  Typography,
  TextField,
  Button,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
} from '@mui/material';
import API from '@/lib';
import ThankYou from '@/components/ThankYou';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    countryCode: '+91',
    phone: '',
    companyName: '',
    companyUrl: '',
    subject: 'Project Query',
    budget: '',
    referralSource: 'Social Media',
    message: '',
    location: '',
    labels: ['new'],
    tags: [],

    assignee: null,
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    let tempErrors = {};

    if (!formData.firstName.trim()) tempErrors.firstName = 'First name is required';
    if (!formData.lastName.trim()) tempErrors.lastName = 'Last name is required';
    if (!formData.countryCode.trim()) tempErrors.countryCode = 'country code is required';
    if (!formData.email.trim()) {
      tempErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = 'Enter a valid email';
    }
    if (!formData.phone.trim()) tempErrors.phone = 'Phone is required';

    setErrors(tempErrors);

    // Returns true if no errors
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (validate()) {
      const payload = {
        ...formData,
        phoneNumber: formData.countryCode + formData.phone,
        countryCode: undefined,
        phone: undefined,
      };

      // submit API call here
      const res = await API.post('v1/contactUs/createContactUs', payload);
      // console.log(res);

      if (res.ok) {
        setSubmitted(true);
      }
    } else {
      console.log('Validation failed');
    }
  };

  const handleChange = (e) => {
    validate();

    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <Box sx={{ p: { xs: 2, md: 6 }, backgroundColor: '#fff' }}>
      <Grid container spacing={4} alignItems="flex-start" justifyContent="center">
        {/* Left Section - Description */}
        <Grid item xs={12} md={4}>
          <Typography variant="body1" sx={{ color: 'green', fontWeight: 500 }}>
            Contact Us
          </Typography>
          <Typography variant="h3" sx={{ fontWeight: 'bold', mt: 1, lineHeight: 1.2 }}>
            Get in Touch.
          </Typography>
          <Typography variant="h3" sx={{ fontWeight: 'bold', mt: 1, lineHeight: 1.2 }}>
            Contact Information
          </Typography>
          <Typography variant="h3" sx={{ fontWeight: 'bold', mt: 1, lineHeight: 1.2 }}>
            and Support.
          </Typography>
          <Box
            sx={{
              maxWidth: 500, // or any size
              p: 2,
              // border: "1px solid",
              borderColor: 'grey.300',
              borderRadius: 2,
            }}
          >
            <Typography
              variant="body1"
              sx={{
                color: 'grey.700',
                whiteSpace: 'normal', // ensures wrapping
                wordBreak: 'break-word', // breaks long words if needed
              }}
            >
              Your Trusted Partner in Data Protection with Cutting-Edge Solutions for
              Comprehensive Data Security.
            </Typography>
          </Box>
        </Grid>
        {submitted && <ThankYou onBack={() => setSubmitted(false)} />}
        {/* Right Section - Form */}
        {!submitted && (
          <Grid item xs={12} md={6}>
            <Box
              component="form"
              sx={{
                width: '100%',
                maxWidth: '600px', // allow wider layout for desktop
                margin: '0 auto',
                display: 'flex',
                flexDirection: 'column',
                gap: 2,
                backgroundColor: '#fafafa',
                p: 3,
                borderRadius: 2,
                boxShadow: 1,
              }}
            >
              {/* Name Fields */}
              <Grid container spacing={2}>
                <Grid item>
                  <TextField
                    onChange={(e) => handleChange(e)}
                    fullWidth
                    label="First Name"
                    name="firstName"
                    required
                    placeholder="Your First Name"
                    error={!!errors.firstName}
                    helperText={errors.firstName}
                  />
                </Grid>
                <Grid item>
                  <TextField
                    onChange={(e) => handleChange(e)}
                    fullWidth
                    label="Last Name"
                    name="lastName"
                    required
                    placeholder="Your Last Name"
                    error={!!errors.lastName}
                    helperText={errors.lastName}
                  />
                </Grid>
              </Grid>

              {/* Email */}
              <TextField
                onChange={(e) => handleChange(e)}
                fullWidth
                label="Email"
                type="email"
                name="email"
                required
                placeholder="youremail@email.com"
                error={!!errors.email}
                helperText={errors.email}
              />

              <Grid container spacing={2}>
                {/* Country Code - 4/12 on md+ */}
                <Grid item xs={12} md={4}>
                  <TextField
                    onChange={handleChange}
                    fullWidth
                    label="Country Code"
                    name="countryCode"
                    required
                    placeholder="Country Code"
                    error={!!errors.countryCode}
                    helperText={errors.countryCode}
                    value={formData.countryCode}
                  />
                </Grid>

                {/* Phone Number - 8/12 on md+ */}
                <Grid item xs={12} md={8}>
                  <TextField
                    onChange={handleChange}
                    fullWidth
                    label="Phone"
                    type="tel"
                    name="phone"
                    required
                    placeholder="Phone Number"
                    error={!!errors.phone}
                    helperText={errors.phone}
                  />
                </Grid>
              </Grid>

              {/* Company Name */}
              <TextField
                onChange={(e) => handleChange(e)}
                fullWidth
                label="Company Name"
                name="companyName"
                placeholder="Your Company Name"
              />
              <TextField
                onChange={(e) => handleChange(e)}
                fullWidth
                label="Company URL"
                name="companyUrl"
                // required
                placeholder="Your Company URL"
              />
              <TextField
                onChange={(e) => handleChange(e)}
                fullWidth
                label="Address"
                name="location"
                // required
                placeholder="Address"
              />

              <FormControl fullWidth>
                <InputLabel id="Requirement">Requirement</InputLabel>
                <Select
                  onChange={(e) => handleChange(e)}
                  labelId="Requirement"
                  id="Requirement"
                  name="subject"
                  value={formData.subject}
                  label="Requirement"
                >
                  <MenuItem value={'General Inquiry'}>General Inquiry</MenuItem>
                  <MenuItem value={'Partnership'}>Partnership</MenuItem>
                  <MenuItem value={'Project Query'}>Project Query</MenuItem>
                  <MenuItem value={'Support'}>Support</MenuItem>
                </Select>
              </FormControl>
              <FormControl fullWidth>
                <InputLabel id="budget">Budget</InputLabel>
                <Select
                  onChange={(e) => handleChange(e)}
                  labelId="budget"
                  id="budget"
                  name="budget"
                  value={formData.budget}
                  label="budget"
                >
                  <MenuItem value={'<1000'}>less than $1,000</MenuItem>
                  <MenuItem value={'1000-5000'}>$1,000 – $5,000</MenuItem>
                  <MenuItem value={'5000+'}>$5,000+</MenuItem>
                </Select>
              </FormControl>

              <FormControl fullWidth>
                <InputLabel id="Hear-about-us">Hear About Us</InputLabel>
                <Select
                  onChange={(e) => handleChange(e)}
                  labelId="Hear-about-us"
                  id="Hear"
                  name="referralSource"
                  value={formData.referralSource}
                  label="Hear About Us"
                >
                  <MenuItem value={'Google'}>Google</MenuItem>
                  <MenuItem value={'Referral'}>Referral</MenuItem>
                  <MenuItem value={'Social Media'}>Social Media</MenuItem>
                  <MenuItem value={'Others'}>Others</MenuItem>
                </Select>
              </FormControl>

              {/* Message Field */}
              <TextField
                onChange={(e) => handleChange(e)}
                fullWidth
                label="Message"
                name="message"
                placeholder="Write your message here..."
                multiline
                rows={4}
              />

              {/* Submit Button */}
              <Button
                variant="contained"
                sx={{ mt: 1, backgroundColor: '#1976d2' }}
                size="large"
                onClick={(e) => handleSubmit(e)}
              >
                Submit
              </Button>
            </Box>
          </Grid>
        )}
      </Grid>
    </Box>
  );
}

