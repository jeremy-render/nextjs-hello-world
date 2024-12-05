export default function handler(req, res) {
    // Access environment variables
    const instanceId = process.env.RENDER_INSTANCE_ID || 'Unknown';
  
    // Get requester's IP address
    const requesterIp =
        req.headers['x-forwarded-for'] || // Check proxy headers
        req.connection.remoteAddress ||
        req.socket.remoteAddress;
  
    // Respond with instance details
    res.status(200).json({
        response: 'Hello from Next.js!',
        instance_id: instanceId,
        IP: requesterIp,
        headers: req.headers,
    });
};