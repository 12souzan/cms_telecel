import React from 'react';
import { Card, Box, Chip, Link, Button } from '@mui/material';
import { Phone, Email, Language, LocationOn, Person, AccessTime, Star } from '@mui/icons-material';
import TypographyCustom from '../TypographyCustom';
import { CardContentstyle, CustomBox2, customEditButton, iconDesign, TitleBox } from '../../utils/style';
import ModeEditIcon from '@mui/icons-material/ModeEdit';

const ContactInfo = ({ icon, text, link }) => (
    <Box display="flex" alignItems="center" gap={1} mt={1}>
        {icon}
        {link ? <Link href={link} target="_blank" rel="noopener" color="#000000">{text}</Link> : text}
    </Box>
);

const InfoRow = ({ icon, label }) => (
    <TypographyCustom variant="body1" icons={icon} TypographyContent={label} />
);

function ContentDetailsComponent({
    serviceType,
    status,
    servicePhone,
    serviceEmail,
    serviceWebsite,
    serviceLocation,
    serviceContactPerson,
    serviceOperatingHours,
    serviceOffered,
    serviceRatings,
    serviceReviewsCount,
    additionalNotes,
    onClickEdit
}) {
    return (
        <Card sx={{ maxWidth: 800, mx: "auto", mt: 4, boxShadow: 3, borderRadius: 3 }}>
            <CardContentstyle >
                <Box sx={TitleBox}>
                    <div className='flex items-start justify-center flex-col'>
                        <TypographyCustom variant="body5" fontWeight="bold" sx={{ color: "var(--primaryColor)" }} TypographyContent='Service Type:' />
                        <TypographyCustom fontWeight="600 !important" variant='h6' TypographyContent={serviceType} />
                    </div>
                    <Chip
                        label={status}
                        color={status === "Active" ? "success" : "error"}
                        variant="contained"
                    />
                    <Button sx={customEditButton} onClick={onClickEdit}><ModeEditIcon sx={{ color: "var(--primaryColor)" }} /></Button>
                </Box>

                <CustomBox2 >
                    <TypographyCustom variant="h6" fontWeight="bold" sx={{ color: "var(--primaryColor)" }} TypographyContent='Contact Info :' />
                    <ContactInfo icon={<Phone sx={iconDesign} />} text={servicePhone} />
                    <ContactInfo icon={<Email sx={iconDesign} />} text={serviceEmail} />
                    <ContactInfo icon={<Language sx={iconDesign} />} text={serviceWebsite} link={serviceWebsite} />
                </CustomBox2>

                <CustomBox2 >
                    <TypographyCustom variant="h6" fontWeight="bold" sx={{ color: "var(--primaryColor)" }} TypographyContent='Phone : ' />
                    <InfoRow icon={<LocationOn sx={iconDesign} />} label={serviceLocation} rowContent='Phone :' />
                </CustomBox2>

                <CustomBox2>
                    <TypographyCustom variant="h6" fontWeight="bold" sx={{ color: "var(--primaryColor)" }} TypographyContent="Services Offered :" />
                    <TypographyCustom variant="body2" TypographyContent={serviceOffered} />
                </CustomBox2>

                <div className='flex flex-col md:flex-row gap-5 justify-between '>
                    <CustomBox2 className='md:w-1/2'>
                        <TypographyCustom variant="h6" fontWeight="bold" sx={{ color: "var(--primaryColor)" }} TypographyContent="Rating :" />
                        <div className='flex gap-2'>
                            <Star sx={iconDesign} />
                            <TypographyCustom variant="body1" TypographyContent={serviceRatings} />
                        </div>
                        <span style={{ color: "#757575" }}>({serviceReviewsCount} reviews)</span>
                    </CustomBox2>

                    <CustomBox2 className='md:w-1/2' >
                        <TypographyCustom variant="h6" fontWeight="bold" sx={{ color: "var(--primaryColor)" }} TypographyContent='Opening Info :' />
                        <InfoRow icon={<Person sx={iconDesign} />} label={serviceContactPerson} />
                        <InfoRow icon={<AccessTime sx={iconDesign} />} label={serviceOperatingHours} />
                    </CustomBox2>
                </div>

                {additionalNotes && (
                    <Box p={2} sx={{ background: "var(--bg-color)" }} borderRadius={2}>
                        <TypographyCustom variant="body5" fontWeight="bold" fontStyle="italic" TypographyContent={additionalNotes} />
                    </Box>
                )}

            </CardContentstyle>
        </Card>
    );
}

export default ContentDetailsComponent;
