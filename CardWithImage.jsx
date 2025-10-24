// CardWithImage.jsx
import React from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const CardWithImage = ({ image, title, description, buttonText, onButtonClick }) => {
  return (
    <Card className="max-w-sm mx-auto shadow-lg hover:shadow-xl transition-shadow duration-300">
      <img src={image} alt={title} className="w-full h-48 object-cover rounded-t-md" />
      <CardContent>
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        {buttonText && (
          <Button className="mt-4 w-full" onClick={onButtonClick}>
            {buttonText}
          </Button>
        )}
      </CardContent>
    </Card>
  );
};

export default CardWithImage;
