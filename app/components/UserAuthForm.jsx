// UserAuthForm.jsx
"use client";
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
// import { useRouter } from "next/navigation";

const UserAuthForm = ({ onSubmit, formik, className, ...props }) => {
  return (
    <div className={cn("grid gap-6", className)} {...props}>
      <form onSubmit={formik.handleSubmit}>
        <div className="grid gap-2">
          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="number">
              Phone Number
            </Label>
            <Input
              id="number"
              placeholder="+977 9841234567"
              name="phone"
              type="number"
              onChange={formik.handleChange}
              value={formik.values.email}
              // disabled={isLoading}
            />
          </div>
          <Button
            type="submit"
            // onClick={() => router.push('/signin')}
            // disabled={isLoading}
          >
            {/* {isLoading && null} */}
            Login
          </Button>
        </div>
      </form>
    </div>
  );
};

export default UserAuthForm;
