// A simple data API that will be used to get the data for our
// components. On a real website, a more robust data fetching
// solution would be more appropriate.
const analyticsApi = [
    {
        "name": "Page Views per Session by Country",
        "status": "success",
        "index": 0,
        "body": {
            "results": [
                {
                    "page_views": "13",
                    "dimensions": {
                        "country": "(not set)"
                    }
                },
                {
                    "page_views": "21",
                    "dimensions": {
                        "country": "Australia"
                    }
                },
                {
                    "page_views": "7",
                    "dimensions": {
                        "country": "Israel"
                    }
                },
                {
                    "page_views": "8",
                    "dimensions": {
                        "country": "Singapore"
                    }
                },
                {
                    "page_views": "17",
                    "dimensions": {
                        "country": "United Kingdom"
                    }
                },
                {
                    "page_views": "46",
                    "dimensions": {
                        "country": "United States"
                    }
                }
            ],
            "meta": {
                "totals": {
                    "page_views": "112"
                },
                "maximums": {
                    "page_views": "46"
                },
                "minimums": {
                    "page_views": "7"
                }
            }
        }
    },
    {
        "name": "Page Views per Session Probability Distribution",
        "description": "Used to show the spread of likely values for page views",
        "status": "success",
        "index": 1,
        "body": [
            {
                "dimensions": {},
                "probabilities": [
                    {
                        "label": "0",
                        "probability": 0.007
                    },
                    {
                        "label": "1",
                        "probability": 0.021
                    },
                    {
                        "label": "2",
                        "probability": 0.053
                    },
                    {
                        "label": "3",
                        "probability": 0.143
                    },
                    {
                        "label": "4",
                        "probability": 0.216
                    },
                    {
                        "label": "5",
                        "probability": 0.263
                    },
                    {
                        "label": "6",
                        "probability": 0.172
                    },
                    {
                        "label": "7",
                        "probability": 0.078
                    },
                    {
                        "label": "8",
                        "probability": 0.037
                    },
                    {
                        "label": "9",
                        "probability": 0.01
                    }
                ]
            }
        ]
    },
    {
        "name": "Page Views per Session Probability Distribution",
        "description": "Used to show the spread of likely values for page views broken out by country. Not part of the test, this is a preview of something we will have to do.",
        "status": "success",
        "index": 2,
        "body": [
            {
                "dimensions": {
                    "country": "Singapore"
                },
                "probabilities": [
                    {
                        "label": "0.06",
                        "probability": 0.008
                    },
                    {
                        "label": "0.36",
                        "probability": 0.025
                    },
                    {
                        "label": "0.67",
                        "probability": 0.057
                    },
                    {
                        "label": "0.98",
                        "probability": 0.16
                    },
                    {
                        "label": "1.28",
                        "probability": 0.231
                    },
                    {
                        "label": "1.59",
                        "probability": 0.217
                    },
                    {
                        "label": "1.89",
                        "probability": 0.187
                    },
                    {
                        "label": "2.20",
                        "probability": 0.072
                    },
                    {
                        "label": "2.40",
                        "probability": 0.034
                    },
                    {
                        "label": "2.81",
                        "probability": 0.009
                    }
                ]
            },
            {
                "dimensions": {
                    "country": "United Kingdom"
                },
                "probabilities": [
                    {
                        "label": "0.3",
                        "probability": 0.002
                    },
                    {
                        "label": "1.14",
                        "probability": 0.013
                    },
                    {
                        "label": "2.25",
                        "probability": 0.038
                    },
                    {
                        "label": "3.36",
                        "probability": 0.151
                    },
                    {
                        "label": "4.47",
                        "probability": 0.263
                    },
                    {
                        "label": "5.58",
                        "probability": 0.289
                    },
                    {
                        "label": "6.69",
                        "probability": 0.148
                    },
                    {
                        "label": "7.80",
                        "probability": 0.074
                    },
                    {
                        "label": "8.91",
                        "probability": 0.02
                    },
                    {
                        "label": "10.02",
                        "probability": 0.002
                    }
                ]
            },
            {
                "dimensions": {
                    "country": "United States"
                },
                "probabilities": [
                    {
                        "label": "0",
                        "probability": 0.004
                    },
                    {
                        "label": "3.06",
                        "probability": 0.017
                    },
                    {
                        "label": "6.12",
                        "probability": 0.069
                    },
                    {
                        "label": "9.18",
                        "probability": 0.153
                    },
                    {
                        "label": "12.24",
                        "probability": 0.228
                    },
                    {
                        "label": "15.0",
                        "probability": 0.236
                    },
                    {
                        "label": "18.36",
                        "probability": 0.186
                    },
                    {
                        "label": "21.42",
                        "probability": 0.067
                    },
                    {
                        "label": "24.48",
                        "probability": 0.027
                    },
                    {
                        "label": "27.54",
                        "probability": 0.013
                    }
                ]
            }
        ]
    }
]
  
  export default analyticsApi