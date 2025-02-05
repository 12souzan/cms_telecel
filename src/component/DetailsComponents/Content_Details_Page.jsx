import React from 'react';
import { Card, Box, Chip, Link, Button } from '@mui/material';
import { Phone, Email, Language, LocationOn, Person, AccessTime, Star } from '@mui/icons-material';
import TypographyCustom from '../TypographyCustom';
import { CardContentstyle, CustomBox2, customEditButton, iconDesign, TitleBox } from '../../utils/style';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import PublicIcon from '@mui/icons-material/Public';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';

const ContactInfo = ({ icon, text, link }) => (
    text && (
        <Box display="flex" alignItems="center" gap={1} mt={1}>
            {icon}
            {link ? <Link href={link} target="_blank" rel="noopener" color="#000000">{text}</Link> : text}
        </Box>
    )
);

const InfoRow = ({ icon, label }) => (
    label && <TypographyCustom variant="body1" icons={icon} TypographyContent={label} />
);

function Content_Details_Page({serviceType,status,country,servicePhone,serviceEmail,serviceWebsite,serviceLocation,serviceContactPerson,serviceOperatingHours,serviceOffered,serviceRatings,serviceReviewsCount,additionalNotes,onClickEdit}) {
    return (
        <Card sx={{ maxWidth: 800, mx: "auto", mt: 4, boxShadow: 3, borderRadius: 3 }}>
            <CardContentstyle>
                <Box sx={TitleBox}>
                    <div className='flex items-start justify-center flex-col'>
                        {serviceType && (
                            <>
                                <TypographyCustom variant="body5" fontWeight="bold" sx={{ color: "var(--primaryColor)" }} TypographyContent='Service Type:' />
                                <TypographyCustom fontWeight="600 !important" variant='h6' TypographyContent={serviceType} />
                            </>
                        )}
                    </div>
                    {status && (
                        <Chip
                            label={status}
                            color={status === "Active" ? "success" : "error"}
                            variant="contained"
                        />
                    )}
                    <Button sx={customEditButton} onClick={onClickEdit}>
                        <ModeEditIcon sx={{ color: "var(--primaryColor)" }} />
                    </Button>
                </Box>
                {servicePhone || serviceEmail || serviceWebsite ? (
                    <CustomBox2>
                        {servicePhone && <ContactInfo icon={<Phone sx={iconDesign} />} text={servicePhone} />}
                        {serviceEmail && <ContactInfo icon={<Email sx={iconDesign} />} text={serviceEmail} />}
                        {serviceWebsite && <ContactInfo icon={<Language sx={iconDesign} />} text={serviceWebsite} link={serviceWebsite} />}
                        {country && <ContactInfo icon={<PublicIcon sx={iconDesign} />} text={country} />}
                        {serviceType && <ContactInfo icon={<ManageAccountsIcon sx={iconDesign} />} text={serviceType} />}
                    </CustomBox2>) : ''
                }
                {serviceLocation && (
                    <CustomBox2>
                        <>
                            <TypographyCustom variant="h6" fontWeight="bold" sx={{ color: "var(--primaryColor)" }} TypographyContent='Location: ' />
                            <InfoRow icon={<LocationOn sx={iconDesign} />} label={serviceLocation} />
                        </>
                    </CustomBox2>
                )}
                {serviceOffered && (
                    <CustomBox2>
                        <>
                            <TypographyCustom variant="h6" fontWeight="bold" sx={{ color: "var(--primaryColor)" }} TypographyContent="Services Offered:" />
                            <TypographyCustom variant="body2" TypographyContent={serviceOffered} />
                        </>
                    </CustomBox2>
                )}


                <div className='flex flex-col md:flex-row gap-5 justify-between'>
                    {serviceRatings && serviceReviewsCount && (
                        <CustomBox2 className='md:w-1/2'>
                            <TypographyCustom variant="h6" fontWeight="bold" sx={{ color: "var(--primaryColor)" }} TypographyContent="Rating:" />
                            <div className='flex gap-2'>
                                <Star sx={iconDesign} />
                                <TypographyCustom variant="body1" TypographyContent={serviceRatings} />
                            </div>
                            <span style={{ color: "#757575" }}>({serviceReviewsCount} reviews)</span>
                        </CustomBox2>
                    )}

                    {(serviceContactPerson || serviceOperatingHours) && (
                        <CustomBox2 className='md:w-1/2'>
                            {serviceContactPerson && (
                                <InfoRow icon={<Person sx={iconDesign} />} label={serviceContactPerson} />
                            )}
                            {serviceOperatingHours && (
                                <InfoRow icon={<AccessTime sx={iconDesign} />} label={serviceOperatingHours} />
                            )}
                        </CustomBox2>
                    )}
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

export default Content_Details_Page;
