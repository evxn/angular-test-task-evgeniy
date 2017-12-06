    [DataContract]
    [Serializable]
    public class CaseWallData
    {
        public CaseWallData()
        {
            CaseCommentWallActivities = new List<CaseCommentWallActivity>();
            CaseEvidenceWallActivities = new List<CaseEvidenceWallActivity>();
            CaseStatusChangedWallActivities = new List<CaseStatusChangedWallActivity>();
        }

        [DataMember]
        public List<CaseCommentWallActivity> CaseCommentWallActivities { get; set; }
        [DataMember]
        public List<CaseEvidenceWallActivity> CaseEvidenceWallActivities { get; set; }
        [DataMember]
        public List<CaseStatusChangedWallActivity> CaseStatusChangedWallActivities { get; set; }
    }
	
	
	[DataContract]
    public enum WallActivityEnum
    {
        [EnumMember] CaseStatusChange,
        [EnumMember] CaseEvidence,
        [EnumMember] CaseComment,
    };

    [DataContract]
    [Serializable]
    public class BaseWallActivity 
    {
        [DataMember]
        public string CreatorUserId { get; set; }

        [DataMember]
        public long Id { get; set; }

        [DataMember]
        public WallActivityEnum Type { get; set; }
        [DataMember]
        public long CaseId { get; set; }

        [DataMember]
        public bool IsFavorite{ get; set; }

        [DataMember]
        public long ModificationTimeUnixTimeInMs { get; set; }
    }
	
	    [DataContract]
    [Serializable]

    public class CaseCommentWallActivity : BaseWallActivity
    {
        public CaseCommentWallActivity()
        {
            Type = WallActivityEnum.CaseComment;
        }

        [DataMember]
        public string Comment{ get; set; }
    }
	
	    [DataContract]
    [Serializable]

    public class CaseEvidenceWallActivity : BaseWallActivity
    {
        public CaseEvidenceWallActivity()
        {
            Type = WallActivityEnum.CaseEvidence;
        }

        [DataMember]
        public string EvidenceName { get; set; }
       
	   [DataMember]
        public string Description { get; set; }

        [DataMember]
        public string EvidenceThumbnailBase64 { get; set; }
        [DataMember]
        public long EvidenceId { get; set; }
        [DataMember]
        public string FileType { get; set; }
    }
	
	    [DataContract]
    [Serializable]
    public class CaseStatusChangedWallActivity : BaseWallActivity
    {

        public CaseStatusChangedWallActivity()
        {
            Type = WallActivityEnum.CaseStatusChange;
        }

        [DataMember]
        public string Description { get; set; }

    }