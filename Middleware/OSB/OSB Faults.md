### OSB Faults & Error Handling


##### OSB ERROR XFORM

~~~xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/">
  <soapenv:Body>
    <soapenv:Fault>
      <faultcode>soapenv:Server</faultcode>
      <faultstring>OSB-395358: La expresión XQuery para el parámetro de entrada ha tenido un resultado nulo</faultstring>
      <detail>
        <con:fault xmlns:con="http://www.bea.com/wli/sb/context">
          <con:errorCode>OSB-395358</con:errorCode>
          <con:reason>La expresión XQuery para el parámetro de entrada ha tenido un resultado nulo</con:reason>
          <con:location>
            <con:node>PipelinePairNode1</con:node>
            <con:pipeline>PipelinePairNode1_response</con:pipeline>
            <con:stage>stage1</con:stage>
            <con:path>response-pipeline</con:path>
          </con:location>
        </con:fault>
      </detail>
    </soapenv:Fault>
  </soapenv:Body>
</soapenv:Envelope>
~~~

**$fault**
~~~xml
<con:fault xmlns:con="http://www.bea.com/wli/sb/context">
  <con:errorCode>OSB-395358</con:errorCode>
  <con:reason>La expresión XQuery para el parámetro de entrada ha tenido un resultado nulo</con:reason>
  <con:location>
    <con:node>PipelinePairNode1</con:node>
    <con:pipeline>PipelinePairNode1_response</con:pipeline>
    <con:stage>stage1</con:stage>
    <con:path>response-pipeline</con:path>
  </con:location>
</con:fault>
~~~

##### SCA RETIRED

~~~xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/">
  <soapenv:Body>
    <soapenv:Fault>
      <faultcode>soapenv:Server</faultcode>
      <faultstring>OSB-380001: Internal Server Error</faultstring>
      <detail>
        <con:fault xmlns:con="http://www.bea.com/wli/sb/context">
          <con:errorCode>OSB-380001</con:errorCode>
          <con:reason>Internal Server Error</con:reason>
          <con:location>
            <con:node>RouteNode1</con:node>
            <con:path>response-pipeline</con:path>
          </con:location>
        </con:fault>
      </detail>
    </soapenv:Fault>
  </soapenv:Body>
</soapenv:Envelope>
~~~

**$fault**
~~~xml
<con:fault xmlns:con="http://www.bea.com/wli/sb/context">
  <con:errorCode>OSB-380001</con:errorCode>
  <con:reason>Internal Server Error</con:reason>
  <con:location>
    <con:node>RouteNode1</con:node>
    <con:path>response-pipeline</con:path>
  </con:location>
</con:fault>
~~~

##### SCA UNDEPLOYED

~~~xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/">
  <soapenv:Body>
    <soapenv:Fault>
      <faultcode>soapenv:Server</faultcode>
      <faultstring>OSB-380002: Not Found</faultstring>
      <detail>
        <con:fault xmlns:con="http://www.bea.com/wli/sb/context">
          <con:errorCode>OSB-380002</con:errorCode>
          <con:reason>Not Found</con:reason>
          <con:location>
            <con:node>RouteNode1</con:node>
            <con:path>response-pipeline</con:path>
          </con:location>
        </con:fault>
      </detail>
    </soapenv:Fault>
  </soapenv:Body>
</soapenv:Envelope>
~~~

**$fault**
~~~xml
<con:fault xmlns:con="http://www.bea.com/wli/sb/context">
  <con:errorCode>OSB-380002</con:errorCode>
  <con:reason>Not Found</con:reason>
  <con:location>
    <con:node>RouteNode1</con:node>
    <con:path>response-pipeline</con:path>
  </con:location>
</con:fault>
~~~
