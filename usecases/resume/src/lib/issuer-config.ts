export const issuerConfig = {
  credential_issuer: "https://server.example.com",
  authorization_server: "https://server.example.com",
  credential_endpoint: "https://server.example.com/credential",
  deferred_credential_endpoint:
    "https://server.example.com/credential_deferred",
  display: [
    {
      name: "UAegean",
      location: "UAegean",
      locale: "en-GB",
      description:
        "For queries about how we are managing your data please contact the Data Protection Officer.",
    },
  ],
  credentials_supported: {
    VerifiablePortableDocumentA1: {
      format: "vc+sd-jwt",
      scope: "VerifiablePortableDocumentA1",
      cryptographic_binding_methods_supported: ["jwk"],
      cryptographic_suites_supported: ["ES256"],
      display: [
        {
          name: "Portable Document A1",
          locale: "en-GB",
          background_color: "#12107c",
          text_color: "#FFFFFF",
        },
      ],
      credential_definition: {
        vct: "VerifiablePortableDocumentA1",
        claims: {
          given_name: {
            display: [
              {
                name: "Given Name",
                locale: "en-GB",
              },
              {
                name: "Vorname",
                locale: "de-DE",
              },
            ],
          },
          last_name: {
            display: [
              {
                name: "Surname",
                locale: "en-GB",
              },
              {
                name: "Nachname",
                locale: "de-DE",
              },
            ],
          },
        },
      },
    },
    VerifiablePortableDocumentA2: {
      format: "vc_jwt",
      scope: "VerifiablePortableDocumentA2",
      cryptographic_binding_methods_supported: ["jwk"],
      cryptographic_suites_supported: ["ES256"],
      display: [
        {
          name: "Portable Document A2",
          locale: "en-GB",
          background_color: "#12107c",
          text_color: "#FFFFFF",
        },
      ],
      credential_definition: {
        type: ["VerifiablePortableDocumentA2"],
        claims: {
          given_name: {
            display: [
              {
                name: "Given Name",
                locale: "en-GB",
              },
              {
                name: "Vorname",
                locale: "de-DE",
              },
            ],
          },
          last_name: {
            display: [
              {
                name: "Surname",
                locale: "en-GB",
              },
              {
                name: "Nachname",
                locale: "de-DE",
              },
            ],
          },
        },
      },
    },
    PID: {
      format: "vc_jwt",
      scope: "PID",
      cryptographic_binding_methods_supported: ["jwk"],
      cryptographic_suites_supported: ["ES256"],
      display: [
        {
          name: "PID",
          locale: "en-GB",
          background_color: "#12107c",
          text_color: "#FFFFFF",
        },
      ],
      credential_definition: {
        type: ["PID"],
        claims: {
          given_name: {
            display: [
              {
                name: "Given Name",
                locale: "en-GB",
              },
            ],
          },
          family_name: {
            display: [
              {
                name: "Surname",
                locale: "en-GB",
              },
            ],
          },
          birth_date: {
            display: [
              {
                name: "Birth Date",
                locale: "en-GB",
              },
            ],
          },
          age_over_18: {
            display: [
              {
                name: "Age Over 18",
                locale: "en-GB",
              },
            ],
          },
          issuance_date: {
            display: [
              {
                name: "Issuance Date",
                locale: "en-GB",
              },
            ],
          },
          expiry_date: {
            display: [
              {
                name: "Expiry Date",
                locale: "en-GB",
              },
            ],
          },
          issuing_authority: {
            display: [
              {
                name: "Issuing Authority",
                locale: "en-GB",
              },
            ],
          },
          issuing_country: {
            display: [
              {
                name: "Issuing Country",
                locale: "en-GB",
              },
            ],
          },
        },
      },
    },
    ePassportCredential: {
      format: "vc_jwt",
      scope: "ePassportCredential",
      cryptographic_binding_methods_supported: ["jwk"],
      cryptographic_suites_supported: ["ES256"],
      display: [
        {
          name: "ePassportCredential",
          locale: "en-GB",
          background_color: "#12107c",
          text_color: "#FFFFFF",
        },
      ],
      credential_definition: {
        type: ["ePassportCredential"],
        claims: {
          id: {
            display: [
              {
                name: "id",
                locale: "en-GB",
              },
            ],
          },
          electronicPassport: {
            display: [
              {
                name: "electronicPassport",
                locale: "en-GB",
              },
            ],
            properties: {
              dataGroup1: {
                display: [
                  {
                    name: "dataGroup1",
                    locale: "en-GB",
                  },
                ],
                properties: {
                  birthdate: {
                    display: [
                      {
                        name: "birthdate",
                        locale: "en-GB",
                      },
                    ],
                  },
                  docTypeCode: {
                    display: [
                      {
                        name: "docTypeCode",
                        locale: "en-GB",
                      },
                    ],
                  },
                  expiryDate: {
                    display: [
                      {
                        name: "expiryDate",
                        locale: "en-GB",
                      },
                    ],
                  },
                  genderCode: {
                    display: [
                      {
                        name: "genderCode",
                        locale: "en-GB",
                      },
                    ],
                  },
                  holdersName: {
                    display: [
                      {
                        name: "holdersName",
                        locale: "en-GB",
                      },
                    ],
                  },
                  issuerCode: {
                    display: [
                      {
                        name: "issuerCode",
                        locale: "en-GB",
                      },
                    ],
                  },
                  natlText: {
                    display: [
                      {
                        name: "natlText",
                        locale: "en-GB",
                      },
                    ],
                  },
                  passportNumberIdentifier: {
                    display: [
                      {
                        name: "passportNumberIdentifier",
                        locale: "en-GB",
                      },
                    ],
                  },
                },
              },
              dataGroup15: {
                display: [
                  {
                    name: "dataGroup15",
                    locale: "en-GB",
                  },
                ],
                properties: {
                  activeAuthentication: {
                    display: [
                      {
                        name: "activeAuthentication",
                        locale: "en-GB",
                      },
                    ],
                    properties: {
                      publicKeyBinaryObject: {
                        display: [
                          {
                            name: "publicKeyBinaryObject",
                            locale: "en-GB",
                          },
                        ],
                      },
                    },
                  },
                },
              },
              dataGroup2EncodedFaceBiometrics: {
                display: [
                  {
                    name: "dataGroup2EncodedFaceBiometrics",
                    locale: "en-GB",
                  },
                ],
                properties: {
                  faceBiometricDataEncodedPicture: {
                    display: [
                      {
                        name: "faceBiometricDataEncodedPicture",
                        locale: "en-GB",
                      },
                    ],
                  },
                },
              },
              digitalTravelCredential: {
                display: [
                  {
                    name: "digitalTravelCredential",
                    locale: "en-GB",
                  },
                ],
                properties: {
                  contentInfo: {
                    display: [
                      {
                        name: "contentInfo",
                        locale: "en-GB",
                      },
                    ],
                    properties: {
                      versionNumber: {
                        display: [
                          {
                            name: "versionNumber",
                            locale: "en-GB",
                          },
                        ],
                      },
                      signatureInfo: {
                        display: [
                          {
                            name: "signatureInfo",
                            locale: "en-GB",
                          },
                        ],
                        properties: {
                          digestHashAlgorithmIdentifier: {
                            display: [
                              {
                                name: "digestHashAlgorithmIdentifier",
                                locale: "en-GB",
                              },
                            ],
                          },
                          signatureAlgorithmIdentifier: {
                            display: [
                              {
                                name: "signatureAlgorithmIdentifier",
                                locale: "en-GB",
                              },
                            ],
                          },
                          signatureCertificateText: {
                            display: [
                              {
                                name: "signatureCertificateText",
                                locale: "en-GB",
                              },
                            ],
                          },
                          signatureDigestResultBinaryObject: {
                            display: [
                              {
                                name: "signatureDigestResultBinaryObject",
                                locale: "en-GB",
                              },
                            ],
                          },
                          signedAttributes: {
                            display: [
                              {
                                name: "signedAttributes",
                                locale: "en-GB",
                              },
                            ],
                            properties: {
                              attributeTypeCode: {
                                display: [
                                  {
                                    name: "attributeTypeCode",
                                    locale: "en-GB",
                                  },
                                ],
                              },
                              attributeValueText: {
                                display: [
                                  {
                                    name: "attributeValueText",
                                    locale: "en-GB",
                                  },
                                ],
                              },
                            },
                          },
                        },
                      },
                    },
                  },
                  dataCapabilitiesInfo: {
                    display: [
                      {
                        name: "dataCapabilitiesInfo",
                        locale: "en-GB",
                      },
                    ],
                    properties: {
                      dataTransferInterfaceTypeCode: {
                        display: [
                          {
                            name: "dataTransferInterfaceTypeCode",
                            locale: "en-GB",
                          },
                        ],
                      },
                      securityAssuranceLevelIndText: {
                        display: [
                          {
                            name: "securityAssuranceLevelIndText",
                            locale: "en-GB",
                          },
                        ],
                      },
                      userConsentInfoText: {
                        display: [
                          {
                            name: "userConsentInfoText",
                            locale: "en-GB",
                          },
                        ],
                      },
                      virtualComponentPresenceInd: {
                        display: [
                          {
                            name: "virtualComponentPresenceInd",
                            locale: "en-GB",
                          },
                        ],
                      },
                    },
                  },
                  dataContent: {
                    display: [
                      {
                        name: "dataContent",
                        locale: "en-GB",
                      },
                    ],
                    properties: {
                      dataGroup1: {
                        display: [
                          {
                            name: "dataGroup1",
                            locale: "en-GB",
                          },
                        ],
                        properties: {
                          birthdate: {
                            display: [
                              {
                                name: "birthdate",
                                locale: "en-GB",
                              },
                            ],
                          },
                          docTypeCode: {
                            display: [
                              {
                                name: "docTypeCode",
                                locale: "en-GB",
                              },
                            ],
                          },
                          expiryDate: {
                            display: [
                              {
                                name: "expiryDate",
                                locale: "en-GB",
                              },
                            ],
                          },
                          genderCode: {
                            display: [
                              {
                                name: "genderCode",
                                locale: "en-GB",
                              },
                            ],
                          },
                          holdersName: {
                            display: [
                              {
                                name: "holdersName",
                                locale: "en-GB",
                              },
                            ],
                          },
                          issuerCode: {
                            display: [
                              {
                                name: "issuerCode",
                                locale: "en-GB",
                              },
                            ],
                          },
                          natlText: {
                            display: [
                              {
                                name: "natlText",
                                locale: "en-GB",
                              },
                            ],
                          },
                          passportNumberIdentifier: {
                            display: [
                              {
                                name: "passportNumberIdentifier",
                                locale: "en-GB",
                              },
                            ],
                          },
                          personalNumberIdentifier: {
                            display: [
                              {
                                name: "personalNumberIdentifier",
                                locale: "en-GB",
                              },
                            ],
                          },
                        },
                      },
                      dataGroup2EncodedFaceBiometrics: {
                        display: [
                          {
                            name: "dataGroup2EncodedFaceBiometrics",
                            locale: "en-GB",
                          },
                        ],
                        properties: {
                          faceBiometricDataEncodedPicture: {
                            display: [
                              {
                                name: "faceBiometricDataEncodedPicture",
                                locale: "en-GB",
                              },
                            ],
                          },
                        },
                      },
                      docSecurityObject: {
                        display: [
                          {
                            name: "docSecurityObject",
                            locale: "en-GB",
                          },
                        ],
                        properties: {
                          dataGroupHash: {
                            display: [
                              {
                                name: "dataGroupHash",
                                locale: "en-GB",
                              },
                            ],
                            properties: {
                              dataGroupNumber: {
                                display: [
                                  {
                                    name: "dataGroupNumber",
                                    locale: "en-GB",
                                  },
                                ],
                              },
                              valueBinaryObject: {
                                display: [
                                  {
                                    name: "valueBinaryObject",
                                    locale: "en-GB",
                                  },
                                ],
                              },
                            },
                          },
                          digestHashAlgorithmIdentifier: {
                            display: [
                              {
                                name: "digestHashAlgorithmIdentifier",
                                locale: "en-GB",
                              },
                            ],
                          },
                          versionNumber: {
                            display: [
                              {
                                name: "versionNumber",
                                locale: "en-GB",
                              },
                            ],
                          },
                        },
                      },
                    },
                  },
                  docSecurityObject: {
                    display: [
                      {
                        name: "docSecurityObject",
                        locale: "en-GB",
                      },
                    ],
                    properties: {
                      dataGroupHash: {
                        display: [
                          {
                            name: "dataGroupHash",
                            locale: "en-GB",
                          },
                        ],
                        properties: {
                          dataGroupNumber: {
                            display: [
                              {
                                name: "dataGroupNumber",
                                locale: "en-GB",
                              },
                            ],
                          },
                          valueBinaryObject: {
                            display: [
                              {
                                name: "valueBinaryObject",
                                locale: "en-GB",
                              },
                            ],
                          },
                        },
                      },
                      digestHashAlgorithmIdentifier: {
                        display: [
                          {
                            name: "digestHashAlgorithmIdentifier",
                            locale: "en-GB",
                          },
                        ],
                      },
                      versionNumber: {
                        display: [
                          {
                            name: "versionNumber",
                            locale: "en-GB",
                          },
                        ],
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
    },

    EducationalID: {
      format: "vc_jwt",
      scope: "EducationalID",
      cryptographic_binding_methods_supported: ["jwk"],
      cryptographic_suites_supported: ["ES256"],
      display: [
        {
          name: "EducationalID",
          locale: "en-GB",
          background_color: "#12107c",
          text_color: "#FFFFFF",
        },
      ],
      credential_definition: {
        type: ["EducationalID"],
        claims: {
          identifier: {
            display: [
              {
                name: "Identifier",
                locale: "en-GB",
              },
            ],
          },
          schacPersonalUniqueCode: {
            display: [
              {
                name: "SCHAC Personal Unique Code",
                locale: "en-GB",
              },
            ],
          },
          schacPersonalUniqueID: {
            display: [
              {
                name: "SCHAC Personal Unique ID",
                locale: "en-GB",
              },
            ],
          },
          schacHomeOrganization: {
            display: [
              {
                name: "SCHAC Home Organization",
                locale: "en-GB",
              },
            ],
          },
          familyName: {
            display: [
              {
                name: "Family Name",
                locale: "en-GB",
              },
            ],
          },
          firstName: {
            display: [
              {
                name: "First Name",
                locale: "en-GB",
              },
            ],
          },
          displayName: {
            display: [
              {
                name: "Display Name",
                locale: "en-GB",
              },
            ],
          },
          dateOfBirth: {
            display: [
              {
                name: "Date of Birth",
                locale: "en-GB",
              },
            ],
          },
          commonName: {
            display: [
              {
                name: "Common Name",
                locale: "en-GB",
              },
            ],
          },
          mail: {
            display: [
              {
                name: "Email",
                locale: "en-GB",
              },
            ],
          },
          eduPersonPrincipalName: {
            display: [
              {
                name: "eduPerson Principal Name",
                locale: "en-GB",
              },
            ],
          },
          eduPersonPrimaryAffiliation: {
            display: [
              {
                name: "eduPerson Primary Affiliation",
                locale: "en-GB",
              },
            ],
          },
          eduPersonAffiliation: {
            display: [
              {
                name: "eduPerson Affiliation",
                locale: "en-GB",
              },
            ],
          },
          eduPersonScopedAffiliation: {
            display: [
              {
                name: "eduPerson Scoped Affiliation",
                locale: "en-GB",
              },
            ],
          },
          eduPersonAssurance: {
            display: [
              {
                name: "eduPerson Assurance",
                locale: "en-GB",
              },
            ],
          },
        },
      },
    },
    allianceIDCredential: {
      format: "vc_jwt",
      scope: "allianceIDCredential",
      cryptographic_binding_methods_supported: ["jwk"],
      cryptographic_suites_supported: ["ES256"],
      display: [
        {
          name: "AllianceIDCredential",
          locale: "en-GB",
          background_color: "#12107c",
          text_color: "#FFFFFF",
        },
      ],
      credential_definition: {
        type: ["allianceIDCredential"],
        claims: {
          identifier: {
            display: [
              {
                name: "Identifier",
                locale: "en-GB",
              },
            ],
            properties: {
              schemeID: {
                display: [
                  {
                    name: "Scheme ID",
                    locale: "en-GB",
                  },
                ],
              },
              value: {
                display: [
                  {
                    name: "Value",
                    locale: "en-GB",
                  },
                ],
              },
              id: {
                display: [
                  {
                    name: "ID",
                    locale: "en-GB",
                  },
                ],
              },
            },
          },
        },
      },
    },
    ferryBoardingPassCredential: {
      format: "vc_jwt",
      scope: "ferryBoardingPassCredential",
      cryptographic_binding_methods_supported: ["jwk"],
      cryptographic_suites_supported: ["ES256"],
      display: [
        {
          name: "Ferry Boarding Pass",
          locale: "en-GB",
          background_color: "#12107c",
          text_color: "#FFFFFF",
        },
      ],
      credential_definition: {
        type: ["ferryBoardingPassCredential"],
        claims: {
          identifier: {
            display: [
              {
                name: "Identifier",
                locale: "en-GB",
              },
            ],
          },
          ticketQR: {
            display: [
              {
                name: "Ticket QR Code",
                locale: "en-GB",
              },
            ],
          },
          ticketNumber: {
            display: [
              {
                name: "Ticket Number",
                locale: "en-GB",
              },
            ],
          },
          ticketLet: {
            display: [
              {
                name: "Ticket Letter",
                locale: "en-GB",
              },
            ],
          },
          lastName: {
            display: [
              {
                name: "Last Name",
                locale: "en-GB",
              },
            ],
          },
          firstName: {
            display: [
              {
                name: "First Name",
                locale: "en-GB",
              },
            ],
          },
          seatType: {
            display: [
              {
                name: "Seat Type",
                locale: "en-GB",
              },
            ],
          },
          seatNumber: {
            display: [
              {
                name: "Seat Number",
                locale: "en-GB",
              },
            ],
          },
          departureDate: {
            display: [
              {
                name: "Departure Date",
                locale: "en-GB",
              },
            ],
          },
          departureTime: {
            display: [
              {
                name: "Departure Time",
                locale: "en-GB",
              },
            ],
          },
          arrivalDate: {
            display: [
              {
                name: "Arrival Date",
                locale: "en-GB",
              },
            ],
          },
          arrivalTime: {
            display: [
              {
                name: "Arrival Time",
                locale: "en-GB",
              },
            ],
          },
          arrivalPort: {
            display: [
              {
                name: "Arrival Port",
                locale: "en-GB",
              },
            ],
          },
          vesselDescription: {
            display: [
              {
                name: "Vessel Description",
                locale: "en-GB",
              },
            ],
          },
        },
      },
    },
  },
};
