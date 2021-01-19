import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

// Create styles
const styles = StyleSheet.create({
    
    page: {
        fontSize: 20,
        width: 1000
    }
  });

  
  export default () => {
      return (
        <Document title="Hienopdf">
        <Page size="A4" style={styles.page}>
          <View style={styles.section}>
            <Text>Section #1</Text>
          </View>
        </Page>
      </Document>
      );
  }

