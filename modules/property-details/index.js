/* eslint-disable max-statements */
import React, { useEffect } from 'react';
import { Button } from '../../components/button';
import EstimateSection from '../../components/estimate-section';
import MortgageSection from '../../components/mortgage-section';
import PropertyDetailSection from '../../components/property-detail-section';
import { Inset } from './style';

const Detail = ({}) => {
  useEffect(() => {
    window
      .fetch('/api/account')
      .then((res) => res.json())
      .then(console.log);
  }, []);

  return (
    <Inset>
      <EstimateSection />
      <PropertyDetailSection />
      <MortgageSection />
      <Button
        // This is a dummy action
        onClick={() => alert('You have navigated to the edit account page')}>
        Edit account
      </Button>
    </Inset>
  );
};

export default Detail;
