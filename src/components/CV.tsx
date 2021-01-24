import { Page, Text, View, Document, StyleSheet, PDFViewer } from '@react-pdf/renderer';
import React, {useState} from 'react';
import { setSyntheticTrailingComments, skipPartiallyEmittedExpressions } from 'typescript';
// Create styles


  const demodata = {
    basicInfo: {
      name: "Otso Kurkela",
      dateofbirth: "21.8.2005",
      address: "katu 1",
      city: "Hyvinkää",
      postcode: "05800",
      telephone: "04 0123 4567",
      email: "otso.kurkelax@gmail.com"
  },
  profile: {
      description: "Olen 15-vuotias koululaienn Hyvinkäältä. Vapaa-ajalla kalastan ja luen kirjoja. Harrastan aktiivisesti partiota. Olen oma-aloitteinen ja reipas, ja siksi jokaisen tulisi palkata minut."
  },
  workingExperience: [
      {
          company0: "Western systems",
          role0: "ohjelmistoharjoittelija",
          workingExperience0: "Harjoittelin ohjelmistoja",
          workingDate0: "21-27.9.2020"
      },
      {
          company1: "Ode42 OY",
          role1: "software developer",
          workingExperience1: "I did things",
          workingDate1: "21.9.2020"
      },
      {
          company2: "",
          role2: "",
          workingExperience2: "",
          workingDate2: ""
      },
      {
          company3: "",
          role3: "",
          workingExperience3: "",
          workingDate3: ""
      }
  ],
  education: [
      {
      school0: "Tapainlinann koulu",
      degree0: "peruskoulu",
      orientaton0: "kaikenlaisia aineita",
      studyDate0: "2013-2021"
      },
      {
          school1: "Hyvinkään lukio",
          degree1: "ylioppilas",
          orientaton1: "monia eri laineita",
          studyDate1: "2021-2024"
      },
      {
          school2: "Helsingin yliopsito",
          degree2: "maisteri",
          orientaton2: "biologia",
          studyDate2: "2025-2030"
      },
      {
          school3: "",
          degree3: "",
          orientaton3: "",
          studyDate3: ""
      },
  ],
  languages: [
      {
          language0: "Suomi",
          languageSkill0: "Äidinkieli"
      },
      {
          language1: "Englanti",
          languageSkill1: "hyvä"
      },
      {
          language2: "ruotsi",
          languageSkill2: "oman alan sanasto"
      },
      {
          language3: "",
          languageSkill3: ""
      },
  ],
  courses: [
  {
      course0: "Hygieniapassi",
      courseDate0: "2018"
  },
  {
      course1: "Fullstack open",
      courseDate1: "19.1.2020"
  },
  {
      course2: "",
      courseDate2: ""
  },
  {
      course3: "",
      courseDate3: ""
  },
],
references: [
  {
      reference0: "Otto Myöhänen, Western systems",
      referenceContact0: "xxx@gmnail.com"
  },
  {
      reference1: "",
      referenceContact1: ""
  },
  {
      reference2: "",
      referenceContact2: ""
  },
  {
      reference3: "",
      referenceContact3: ""
  },
]
}
const styles = StyleSheet.create({
    
  page: {
      fontSize: 15,
      backgroundColor: '#ffffff',
      padding: 18
  },
  title: {
      fontSize: 20,
      width: '25%'
  },
  header: {
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-between',
      backgroundColor: '#ffffff'
  },
  hr: {
    width: '100%',
    height: 2,
    backgroundColor: '#000000',
    marginTop: 5,
    marginBottom: 5
  },
  textArea: {
      flexDirection: 'row',
      justifyContent: 'space-between'
  },
  descriptionText: {
      width: '70%'
  },
  boxArea: {
      flexDirection: 'column',
      backgroundColor: '#fff'
  },
  singleBox: {
      width: '100%'
  },
  unit: {
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-between',
      backgroundColor: '#fff',
      marginTop: 10,
  },
  unitDate: {
      width: '30%',
      backgroundColor: '#fff'
  },
  unitInfo: {
      width: '70%',
      backgroundColor: '#fff'
  }
  
});
  
  export default (props:any) => {
    const [cvData, setCvData] = useState(demodata);
    
      return (
        <Document title={cvData.basicInfo.name + "_resume"}>
        <Page size="A4" style={styles.page}>
          <View style={styles.header}>
            <Text style={styles.title}>{cvData.basicInfo.name}</Text>
            <Text>RESUME</Text>
          </View>
          <View style={styles.basicInfo}>
            <Text>Born {cvData.basicInfo.dateofbirth}</Text>
            <Text>{cvData.basicInfo.address}</Text>
            <Text>{cvData.basicInfo.postcode} {cvData.basicInfo.city}</Text>
            <Text>{cvData.basicInfo.telephone}</Text>
            <Text>{cvData.basicInfo.email}</Text>
          </View>
          <View style={styles.hr}></View>
          <View style={styles.textArea}>
              <Text style={styles.title}>DESCRIPTION</Text>
              <Text style={styles.descriptionText}>{cvData.profile.description}</Text>
          </View>
          <View style={styles.boxArea}>
              <Text style={styles.title}>WORKING EXPERIENCE</Text>
              <View style={styles.singleBox}>
              {
                  cvData.workingExperience.map((work, i:number) => {
                      let company:string = "company" + i.toString();
                      let workingExperience:string = "workingExperience" + i.toString();
                      let role:string = "role" + i.toString();
                      let workingDate:string = "workingDate" + i.toString();
                      if (work[company] !== "") {
                          return (
                            <View style={styles.unit} key={i}>
                                <Text style={styles.unitDate}>{work[workingDate]}</Text>
                                <View style={styles.unitInfo}>
                                    <Text>{work[company]}</Text>
                                    <Text>{work[role]}</Text>
                                    <Text>{work[workingExperience]}</Text>
                                </View>
                            </View>
                          );
                      }
                  })
              }
              </View>
          </View>
          <View style={styles.boxArea}>
              <Text style={styles.title}>EDUCATION</Text>
              <View style={styles.singleBox}>
                  {
                      cvData.education.map((schoolItem, i:number) => {
                          let school:string = "school" + i.toString();
                          let degree:string = "degree" + i.toString();
                          let orientaton:string = "orientation" + i.toString();
                          let studyDate:string = "studyDate" + i.toString();
                          if (schoolItem[school] !== "") {
                              return (
                                  <View style={styles.unit} key={i}>
                                      <Text style={styles.unitDate}>{schoolItem[studyDate]}</Text>
                                      <View style={styles.unitInfo}>
                                          <Text>{schoolItem[school]}</Text>
                                          <Text>{schoolItem[degree]}</Text>
                                          <Text>{schoolItem[orientaton]}</Text>
                                          </View>
                                      </View>
                              );
                          }
                      })
                  }
              </View>
          </View>
          <View style={styles.boxArea}>
              <Text style={styles.title}>LANGUAGE KNOWLEDGE</Text>
              <View style={styles.singleBox}>
                  {
                      cvData.languages.map((languageItem, i:number) => {
                          let language:string = "language" + i.toString();
                          let languageSkill:string = "languageSkill" + i.toString();

                          if (languageItem[language] !== "") {
                              return (
                                  <View style={styles.unit} key={i}>
                                      <Text style={styles.unitDate}>{languageItem[language]}</Text>
                                      <View style={styles.unitInfo}>
                                          <Text>{languageItem[languageSkill]}</Text>
                                          </View>
                                      </View>
                              );
                          }
                      })
                  }
              </View>
          </View>
        </Page> 
      </Document>
      
      );
  }

