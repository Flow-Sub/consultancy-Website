import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const CostCalculator = () => {
  const [selectedCountry, setSelectedCountry] = useState('uk');
  const [selectedCourse, setSelectedCourse] = useState('undergraduate');
  const [selectedCity, setSelectedCity] = useState('london');
  const [duration, setDuration] = useState(1);

  const costData = {
    uk: {
      name: 'United Kingdom',
      currency: 'GBP',
      pkrRate: 350,
      cities: {
        london: {
          name: 'London',
          living: 1334,
          accommodation: 800,
          transport: 150
        },
        manchester: {
          name: 'Manchester',
          living: 1023,
          accommodation: 600,
          transport: 100
        },
        birmingham: {
          name: 'Birmingham',
          living: 1023,
          accommodation: 550,
          transport: 90
        }
      },
      courses: {
        undergraduate: { name: 'Undergraduate', fee: 18000 },
        postgraduate: { name: 'Postgraduate', fee: 22000 },
        mba: { name: 'MBA', fee: 35000 }
      },
      visa: 363,
      insurance: 500
    },
    canada: {
      name: 'Canada',
      currency: 'CAD',
      pkrRate: 200,
      cities: {
        toronto: {
          name: 'Toronto',
          living: 1200,
          accommodation: 800,
          transport: 150
        },
        vancouver: {
          name: 'Vancouver',
          living: 1300,
          accommodation: 900,
          transport: 140
        },
        montreal: {
          name: 'Montreal',
          living: 1000,
          accommodation: 600,
          transport: 100
        }
      },
      courses: {
        undergraduate: { name: 'Undergraduate', fee: 25000 },
        postgraduate: { name: 'Postgraduate', fee: 30000 },
        mba: { name: 'MBA', fee: 45000 }
      },
      visa: 150,
      insurance: 600
    },
    australia: {
      name: 'Australia',
      currency: 'AUD',
      pkrRate: 180,
      cities: {
        sydney: {
          name: 'Sydney',
          living: 1500,
          accommodation: 1000,
          transport: 200
        },
        melbourne: {
          name: 'Melbourne',
          living: 1400,
          accommodation: 900,
          transport: 180
        },
        brisbane: {
          name: 'Brisbane',
          living: 1200,
          accommodation: 700,
          transport: 150
        }
      },
      courses: {
        undergraduate: { name: 'Undergraduate', fee: 30000 },
        postgraduate: { name: 'Postgraduate', fee: 35000 },
        mba: { name: 'MBA', fee: 50000 }
      },
      visa: 650,
      insurance: 500
    },
    newzealand: {
      name: 'New Zealand',
      currency: 'NZD',
      pkrRate: 170,
      cities: {
        auckland: {
          name: 'Auckland',
          living: 1200,
          accommodation: 800,
          transport: 150
        },
        wellington: {
          name: 'Wellington',
          living: 1100,
          accommodation: 700,
          transport: 120
        },
        christchurch: {
          name: 'Christchurch',
          living: 1000,
          accommodation: 600,
          transport: 100
        }
      },
      courses: {
        undergraduate: { name: 'Undergraduate', fee: 25000 },
        postgraduate: { name: 'Postgraduate', fee: 30000 },
        mba: { name: 'MBA', fee: 40000 }
      },
      visa: 375,
      insurance: 400
    }
  };

  const data = costData?.[selectedCountry];
  const cityData = data?.cities?.[selectedCity];
  const courseData = data?.courses?.[selectedCourse];

  const calculateTotal = () => {
    const tuitionFee = courseData?.fee * duration;
    const livingCost = (cityData?.living * 12) * duration;
    const accommodationCost = (cityData?.accommodation * 12) * duration;
    const transportCost = (cityData?.transport * 12) * duration;
    const visaFee = data?.visa;
    const insuranceFee = data?.insurance * duration;

    const totalInForeignCurrency = tuitionFee + livingCost + accommodationCost + transportCost + visaFee + insuranceFee;
    const totalInPKR = totalInForeignCurrency * data?.pkrRate;

    return {
      tuition: tuitionFee,
      living: livingCost,
      accommodation: accommodationCost,
      transport: transportCost,
      visa: visaFee,
      insurance: insuranceFee,
      totalForeign: totalInForeignCurrency,
      totalPKR: totalInPKR
    };
  };

  const costs = calculateTotal();

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6 brand-shadow">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-headline font-bold text-primary flex items-center">
          <Icon name="Calculator" size={24} className="mr-2" />
          Cost Calculator
        </h2>
        <div className="flex items-center space-x-2 px-3 py-1 bg-accent/10 rounded-full border border-accent/30">
          <Icon name="TrendingUp" size={16} className="text-accent" />
          <span className="text-sm font-medium text-accent">Live Rates</span>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Input Section */}
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Select Country
            </label>
            <select
              value={selectedCountry}
              onChange={(e) => setSelectedCountry(e?.target?.value)}
              className="w-full p-3 border border-gray-300 rounded-lg bg-white text-gray-700 focus:ring-2 focus:ring-primary focus:border-primary"
            >
              {Object.entries(costData)?.map(([key, country]) => (
                <option key={key} value={key}>
                  {country?.name}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Course Level
            </label>
            <select
              value={selectedCourse}
              onChange={(e) => setSelectedCourse(e?.target?.value)}
              className="w-full p-3 border border-gray-300 rounded-lg bg-white text-gray-700 focus:ring-2 focus:ring-primary focus:border-primary"
            >
              {Object.entries(data?.courses)?.map(([key, course]) => (
                <option key={key} value={key}>
                  {course?.name}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              City
            </label>
            <select
              value={selectedCity}
              onChange={(e) => setSelectedCity(e?.target?.value)}
              className="w-full p-3 border border-gray-300 rounded-lg bg-white text-gray-700 focus:ring-2 focus:ring-primary focus:border-primary"
            >
              {Object.entries(data?.cities)?.map(([key, city]) => (
                <option key={key} value={key}>
                  {city?.name}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Duration (Years)
            </label>
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setDuration(Math.max(1, duration - 1))}
                className="w-10 h-10 rounded-lg border border-gray-300 flex items-center justify-center hover:bg-gray-50"
              >
                <Icon name="Minus" size={16} />
              </button>
              <span className="text-xl font-bold text-primary min-w-[3rem] text-center">
                {duration}
              </span>
              <button
                onClick={() => setDuration(Math.min(5, duration + 1))}
                className="w-10 h-10 rounded-lg border border-gray-300 flex items-center justify-center hover:bg-gray-50"
              >
                <Icon name="Plus" size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* Results Section */}
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-primary to-secondary text-white rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-4">Total Cost Breakdown</h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span>Tuition Fees:</span>
                <span>{data?.currency} {costs?.tuition?.toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span>Living Expenses:</span>
                <span>{data?.currency} {costs?.living?.toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span>Accommodation:</span>
                <span>{data?.currency} {costs?.accommodation?.toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span>Transportation:</span>
                <span>{data?.currency} {costs?.transport?.toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span>Visa Fees:</span>
                <span>{data?.currency} {costs?.visa?.toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span>Insurance:</span>
                <span>{data?.currency} {costs?.insurance?.toLocaleString()}</span>
              </div>
              <div className="border-t border-white/20 pt-3">
                <div className="flex justify-between text-lg font-bold">
                  <span>Total:</span>
                  <span>{data?.currency} {costs?.totalForeign?.toLocaleString()}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-accent/10 rounded-lg p-6 border border-accent/20">
            <div className="flex items-center justify-between mb-3">
              <h4 className="font-semibold text-gray-800">Pakistani Rupees</h4>
              <div className="flex items-center space-x-1 text-sm text-gray-600">
                <Icon name="RefreshCw" size={14} />
                <span>Rate: 1 {data?.currency} = PKR {data?.pkrRate}</span>
              </div>
            </div>
            <div className="text-3xl font-bold text-accent">
              PKR {costs?.totalPKR?.toLocaleString()}
            </div>
            <p className="text-sm text-gray-600 mt-2">
              *Exchange rates are approximate and subject to change
            </p>
          </div>

          <div className="flex flex-col space-y-3">
            <Button
              variant="default"
              className="bg-primary hover:bg-primary/90"
              iconName="Download"
              iconPosition="left"
            >
              Download Cost Breakdown
            </Button>
            <Button
              variant="outline"
              className="border-brand-orange text-brand-orange hover:bg-brand-orange hover:text-white"
              iconName="MessageCircle"
              iconPosition="left"
            >
              Discuss with Expert
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CostCalculator;